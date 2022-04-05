import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Loading from '../../../Components/Loading';
import { logoutUser } from '../../../Redux/Actions/userActions';
import userService from '../../../Services/user';
import { notifySuccess } from '../../../Utils/notifications';
import { NavbarClient } from '../navbarCLient/NavbarClient';
import styles from '../ClientHome.module.scss';
import { FcProcess, FcCancel } from 'react-icons/fc';
import { GoVerified } from 'react-icons/go';
import { ProductProcess } from '../miShopping/productProcess/ProducProcess';
import { ProductCancel } from './productCancel/ProducCancel';
import { ProductComplete } from './productComplete/ProductComplete';

export const MyShopping = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [user, setUser] = useState(null);
	const currentUser = useSelector((state) => state.userReducer.currentUser);
	const [process, setProcess] = useState(false);
	const [cancel, setCancel] = useState(false);
	const [complete, setComplete] = useState(true);

	useEffect(() => {
		if (currentUser.userId) {
			userService
				.getUser(currentUser.userId)
				.then((res) => {
					setUser(res);
				})
				.catch(() => {
					dispatch(logoutUser());
					notifySuccess('Failed to load user');
					navigate('/login');
				});
		}
	}, [navigate, dispatch]);
	if (currentUser === null) {
		return (
			<>
				<div className='title_login'>
					<h1>You must login to see this interface</h1>
					<Button onClick={() => navigate('/')} className='btn'>
						To accept
					</Button>
				</div>
			</>
		);
	}

	if (!user) {
		return <Loading />;
	}
	const openComplete = () => {
		setComplete(true);
		setProcess(false);
		setCancel(false);
	};
	const openProcess = () => {
		setProcess(true);
		setComplete(false);
		setCancel(false);
	};
	const openCancel = () => {
		setCancel(true);
		setProcess(false);
		setComplete(false);
	};
	return (
		<div className={styles.contClient}>
			<NavbarClient user={user} setUser={setUser} />
			<div className={styles.contButton}>
				<Button onClick={openComplete}>
					<GoVerified />
					Complete
				</Button>
				<Button onClick={openProcess}>
					<FcProcess />
					In process
				</Button>
				<Button onClick={openCancel}>
					<FcCancel />
					Cancelled
				</Button>
			</div>
			{complete ? (
				<ProductComplete Transactions={user.Transactions} user={user} />
			) : process ? (
				<ProductProcess Transactions={user.Transactions} />
			) : cancel ? (
				<ProductCancel Transactions={user.Transactions} />
			) : null}
		</div>
	);
};
