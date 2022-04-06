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
import {BiShoppingBag} from 'react-icons/bi';
import { notifySuccess } from '../../Utils/notifications';
import { MisProductos } from './misProductos/MisProductos';
import { makeStyles, Modal } from '@material-ui/core';
import {IoSendSharp } from 'react-icons/io5';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
	modal: {
		position: 'absolute',
		height: '300px',
		width: '500px',
		borderRadius: '5px',
		backgroundColor: '#23263B',
		border: '2px solid #23263b',
		boxShadow: theme.shadows[5],
		padding: '16px 32px 24px',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-50%)',
	}
}));

export const ClientHome = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [misReviews, setMisReviews] = useState(false);
	const [miFavorito, setMiFavorito] = useState(false);
	const [misProductos,setMisProductos] = useState(true);
	const currentUser = useSelector((state) => state.userReducer.currentUser);
	const [modal, setModal] = useState(false);
	let [info,setInfo]=useState({
		password:'',
		password2:'',
		loginWithSocial: false
	});
	
	const openReview = () => {
		setMisReviews(true);
		setMiFavorito(false);
		setMisProductos(false);
	};

	const openProductos = () => {
		setMisReviews(false)
		setMiFavorito(false);
		setMisProductos(true);
	};

	const openFav = () => {
		setMiFavorito(true);
		setMisReviews(false);
		setMisProductos(false);
	};

	useEffect(() => {
		if (currentUser !== null) {
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

	useEffect(() => {
		if (user?.loginWithSocial===true) {
			setModal(true);
		}
	}, [user]);
	const {password,password2,loginWithSocial} = info;

	const handlePut = () => {
		if(password!==password2){
			return toast.error('Las contraseñas no coinciden');
		}
		else if(password.length<6){
			return toast.error('La contraseña debe tener al menos 6 caracteres');
		}
		else if(password==='' && password2===''){
			return toast.error('No se puede dejar campos vacios');
		}
		info={
			password,
			loginWithSocial
		}
		userService.editUser(user.id, info)
		toast.success('Contraseña actualizada');
		setTimeout(() => {
			setModal(false);
		}, 1000);
	}
	const body = (
		<div className={classes.modal}>
			<div className={styles.ContEdit}>
			<h2>Change password</h2>
			<input type="text" 
			placeholder='Password'
			className={styles.input}
			onChange={(e)=>{
				setInfo({
					...info,
					password: e.target.value
				})
			}}
			/>
			<input type="text" 
			placeholder='Repeat password'
			className={styles.input}
			onChange={(e)=>{
				setInfo({
					...info,
					password2: e.target.value
				})
			}}/>
			<button className={styles.btnEdit} onClick={handlePut}>
				Send
				<IoSendSharp className={styles.emoticon} />
				</button>
			</div>
			
		</div>
	);

	if (currentUser=== null) {
		return (
			<>
				<div className={styles.titleLogin}>
					<h1>You must login to see this interface</h1>
					<button onClick={() => navigate('/login')} className={styles.Client}>
						To accept
					</button>
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
				<button onClick={openReview}>
					{' '}
					<MdOutlineRateReview className={styles.btn} /> My reviews
				</button>
				<button onClick={openProductos}>
					{' '}
					<BiShoppingBag className={styles.btn} />
					My products
				</button>
				<button onClick={openFav}>
					{' '}
					<AiOutlineStar className={styles.btn} />
					My favourites
				</button>
			</div>
			<>
				{
				misProductos?(
					<MisProductos Transactions={user.Transactions}user={user} setUser={setUser} />
				):
					misReviews ? (
					<MisReviews userId={user.id} />
				) : miFavorito ? (
					<MisFavoritos Favorites={user.Favorites} setUser={setUser} />
				) : (
					false
				)}
			</>
			<Modal  open={modal}>
				{body}
			</Modal>
		</div>
	);
};
