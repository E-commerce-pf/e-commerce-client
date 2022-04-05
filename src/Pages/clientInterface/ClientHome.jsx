import React, { useEffect, useState } from 'react';
import { MdOutlineRateReview } from 'react-icons/md';
import { MisFavoritos } from './MisFavoritos/MisFavoritos';
import { NavbarClient } from './navbarCLient/NavbarClient';
import { AiOutlineStar } from 'react-icons/ai';
import styles from './ClientHome.module.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MisReviews } from './MisReviews/MisReviews';
import userService from '../../Services/user';
import { logoutUser } from '../../Redux/Actions/userActions';
import Loading from '../../Components/Loading/index';
import Button from '@mui/material/Button';

import { notifySuccess } from '../../Utils/notifications';

export const ClientHome = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [misReviews, setMisReviews] = useState(false);
	const [miFavorito, setMiFavorito] = useState(true);
	const [user, setUser] = useState(null);
	const currentUser = useSelector((state) => state.userReducer.currentUser);

	const openCar = () => {
		setMisReviews(true);
		setMiFavorito(false);
	};

	const openFav = () => {
		setMiFavorito(true);
		setMisReviews(false);
	};

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

	return (
		<div className={styles.contClient}>
			<NavbarClient user={user} setUser={setUser} />
			<div className={styles.contButton}>
				<Button onClick={openCar}>
					{' '}
					<MdOutlineRateReview className={styles.btn} /> My reviews
				</Button>
				<Button onClick={openFav}>
					{' '}
					<AiOutlineStar className={styles.btn} />
					My favourites
				</Button>
			</div>
			<>
				{misReviews ? (
					<MisReviews userId={user.id} />
				) : miFavorito ? (
					<MisFavoritos Favorites={user.Favorites} setUser={setUser} />
				) : (
					false
				)}
			</>
		</div>
	);
};
