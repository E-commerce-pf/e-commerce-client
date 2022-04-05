import React, { useEffect, useState } from 'react';
import styles from './EditUser.module.scss';
import { IoSendSharp } from 'react-icons/io5';
import { countries } from '../../../Utils/countries';
import userService from '../../../Services/user';
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';
import { getUser } from '../../../Redux/Actions/userActions';
import { useDispatch } from 'react-redux';

export default function EditUser({ user, setUser, setModal }) {
	const dispatch = useDispatch();
	const [info, setInfo] = useState({
		name: '',
		lastName: '',
		country: '',
		city: '',
		phone: '',
		address: '',
	});


	useEffect(()=>{
		setInfo({
			name : user.name,
			lastName : user.lastName,
			county : user.country,
			city : user.city,
			phone: user.phone,
			address:  user.address
		})
	},[user])

	const handlePut = async () => {
		try {
			await userService.editUser(user.id, info)
			.then(res =>{
				dispatch( getUser(res) )
			});
			setUser((user) => {
				return {
					...user,
					name: info.name,
					lastName: info.lastName,
					country: info.country,
				};
			});
			toast.success('Updated data');
			setModal(false);
		} catch (error) {
			toast.error('Algo salió mal');
		}
	};
	return (
		<div className={styles.contEdit}>
			<h2>Data to edit</h2>
			<div className={styles.contInput}>
				<input
					type='text'
					placeholder={`${user.name}`}
					className={styles.input}
					onChange={(e) => {
						setInfo({ ...info, name: e.target.value });
					}}
				/>
				<input
					type='text'
					placeholder={`${user.lastName}`}
					className={styles.input}
					onChange={(e) => {
						setInfo({ ...info, lastName: e.target.value });
					}}
				/>
			</div>
			<div className={styles.contSelect}>
				<select
					defaultValue={user.country}
					onChange={(e) => {
						setInfo({ ...info, country: e.target.value });
					}}
				>
					{countries.map((country, index) => {
						return (
							<option key={index} name={country.value}>
								{country.value}
							</option>
						);
					})}
				</select>
				<input
					type='text'
					placeholder={`${user.city || 'City'}`}
					onChange={(e) => {
						setInfo({ ...info, city: e.target.value });
					}}
					className={styles.inputCity}
				/>
			</div>
			<div className={styles.contInput}>
				<input
					type='text'
					placeholder={`${user.phone || 'Phone'}`}
					onChange={(e) => {
						setInfo({ ...info, phone: e.target.value });
					}}
					className={styles.input}
				/>
				<input
					type='text'
					placeholder={`${user.address || 'Address'}`}
					onChange={(e) => {
						setInfo({ ...info, address: e.target.value });
					}}
					className={styles.input}
				/>
			</div>
			<button className={styles.btnEdit} onClick={handlePut}>
				{' '}
				Send <IoSendSharp className={styles.emoticon} />
			</button>
		</div>
	);
}
