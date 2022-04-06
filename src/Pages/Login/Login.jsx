import React, { useEffect } from 'react';
import { getCart, getUser } from '../../Redux/Actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import styles from './Login.module.scss';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

import Everylogopf from '../../Assets/Images/Everylogopf.svg';

//COMPONENTES
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	GithubAuthProvider,
} from 'firebase/auth';
import firebaseConfing from '../../config/firebase';
import { notifyError, notifySuccess } from '../../Utils/notifications';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '30px',
		backgroundColor: 'white',
		borderradius: '4px',
		boxShadow:
			'0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
	},
	inputF: {},
	avatar: {
		margin: theme.spacing(2),
		backgroundColor: '#fff',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	signup: {
		margin: theme.spacing(-2, 0, 2),
	},
}));

const Login = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	firebaseConfing();
	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();
	const gitHubProvider = new GithubAuthProvider();

	googleProvider.addScope('https://www.googleapis.com/auth/userinfo.profile');
	gitHubProvider.addScope('repo');

	const currentUser = useSelector((state) => state.userReducer.currentUser);
	useEffect(() => {
		if (currentUser) {
			navigate('/viewClient');
		}
	}, [currentUser, navigate]);

	const signInGoogle = () => {
		signInWithPopup(auth, googleProvider).then((result) => {
			const displayName = result.user.displayName.split(' ');
			const user = {
				email: result.user.email,
				name: displayName[0],
				lastName: displayName[1],
				password: result.user.uid,
				loginWithSocial: true,
				isAdmin: false,
			};
			//Enviamos los datos a la api
			axios
				.post('/api/user/login', { ...user })
				.then((res) => {
					notifySuccess(res.data.success);
					dispatch(getUser(res.data.user));
						dispatch(getCart(res.data.user.userId));
					setTimeout(() => {
						navigate('/viewClient');
					}, 3500);
				})
				.catch((err) => {
					notifyError(err.response.data.error);
				});
		});
	};

	const signInGitHub = () => {
		signInWithPopup(auth, gitHubProvider)
			.then((result) => {
				console.log(result);
				const user = {
					email: result._tokenResponse.email,
					name: result._tokenResponse.screenName,
					lastName: '',
					password: result.user.uid,
					loginWithSocial: true,
					isAdmin: false,
				};
				axios
					.post('/api/user/login', { ...user })
					.then((res) => {
						notifySuccess(res.data.success);
						dispatch(getUser(res.data.user));
							dispatch(getCart(res.data.user.userId));
						setTimeout(() => {
							navigate('/viewClient');
						}, 3500);
					})
					.catch((err) => {
						notifyError(err.response.data.error);
					});
			})
			.catch((err) => {
				const error = err.message.split(' ');
				notifyError(error[2]);
			});
	};

	const handlerSubmit = (event) => {
		event.preventDefault();
		const email = document.querySelector('#email').value;
		const password = document.querySelector('#password').value;
		axios
			.post('/api/user/login', { email, password, isAdmin: false })
			.then((res) => {
				dispatch(getUser(res.data.user));
					dispatch(getCart(res.data.user.userId));
				navigate('/viewClient');
				notifySuccess(`Welcome ${res.data.user.name}`);
			})
			.catch((err) => notifyError(err.response.data.error));
	};

	return (
		// <div className={styles.containerLogin}>
		//   <div className={styles.cardButton}>
		//     <button onClick={() => navigate("/")} className={styles.btnLogin}>
		//       <IoIosArrowBack /> Back
		//     </button>
		//   </div>
		//   <div className={styles.contenedor}>

		//   <div className={styles.cardLogin}>
		//     <div className={styles.login1}>
		//       {/* <img src={everylogopf_gris} alt="logo" width="124px" height="78px" /> */}
		//       <h1 className={styles.title2}>Log In</h1>
		//     </div>
		//     <form className={styles.login2} onSubmit={handlerSubmit}>
		//       <h4>Email</h4>
		//       <input
		//         className={styles.titleInput}
		//         type="email"
		//         placeholder="example@example.com"
		//         id='email'
		//         autoComplete="off"
		//       />
		//       <h4>Password</h4>
		//       <input
		//         className={styles.titleInput}
		//         type="password"
		//         placeholder="password"
		//         id='password'
		//       />
		//       <button>Sign in</button>
		//       <Link to="/register" className={styles.link}>
		//       You still don't have an account? Create new account
		//       </Link>
		//     </form>
		//     <div className={styles.login3}>
		//       <button onClick={signInGoogle}>
		//         {" "}
		//         <FcGoogle className={styles.span} />
		//         Sign in with Google
		//       </button>
		//       <button onClick={signInGitHub}>
		//         <BsGithub className={styles.span} />
		//         Sign in with GitHub
		//       </button>
		//     </div>
		//   </div>
		//   </div>
		// </div>
		<>
			<Container component='main' maxWidth='sm'>
		
				<CssBaseline />
				<div className={classes.paper}>
				<Button onClick={() => navigate("/")} variant='contained' color='primary' className={classes.button}>
		<IoIosArrowBack /> Back
		    </Button>
					<Grid>
						<Grid item xs={9}>
							<img src={Everylogopf} alt='logo' width='90px' height='78px' />
						</Grid>
					</Grid>

					<Typography component='div'>
						<Box fontSize={30} fontWeight={600} m={-2}>
							SIGN IN
						</Box>
					</Typography>
					<Typography component='div'>
						<Box fontSize={16} m={1}>
							Sign into your account
						</Box>
					</Typography>
					<form className={classes.form} noValidate onSubmit={handlerSubmit}>
						<Grid
							container
							direction='row'
							justifyContent='center'
							alignItems='center'
						>
							<Grid item xs={9}>
								<TextField
									className={classes.inputF}
									variant='outlined'
									margin='normal'
									required
									fullWidth
									id='email'
									label='Email Address'
									name='email'
									autoComplete='email'
									autoFocus
									type='email'
									InputProps={{
										startAdornment: (
											<InputAdornment position='start'>
												<MailIcon color='disabled' />
											</InputAdornment>
										),
									}}
								/>
							</Grid>

							<Grid item xs={9}>
								<TextField
									variant='outlined'
									margin='normal'
									required
									fullWidth
									name='password'
									label='Password'
									type='password'
									id='password'
									autoComplete='current-password'
									InputProps={{
										startAdornment: (
											<InputAdornment position='start'>
												<LockIcon color='disabled' />
											</InputAdornment>
										),
									}}
								/>
							</Grid>

							<Grid item xs={9}>
								<FormControlLabel
									control={<Checkbox value='remember' color='primary' />}
									label='Remember me'
								/>
							</Grid>

							<Grid item xs={9}>
								<Button
									type='submit'
									fullWidth
									variant='contained'
									color='secondary'
									className={classes.submit}
									m={0}
								>
									Sign In
								</Button>
							</Grid>

							<Grid item>
								<Link to="/register" className={classes.link}>
									Forgot your password?
								</Link>
							</Grid>

							<Grid item xs={9}>
								<Button
									onClick={signInGoogle}
									fullWidth
									variant='contained'
									color='primary'
									className={classes.signup}
									m={-1}
								>
									Sin In With Google <GoogleIcon />
								</Button>
							</Grid>

							<Grid item xs={9}>
								<Button
									onClick={signInGitHub}
									type='submit'
									fullWidth
									variant='contained'
									color='primary'
									className={classes.submit}
									m={0}
								>
									SIN IN WHITH GITHUB <GitHubIcon />
								</Button>
							</Grid>

							<Grid item xs={9}>
								<Typography component='div'>
									<Box fontSize={20} m={3}>
										<Link href='/register' variant='body2'>
											YOU DO NOT HAVE AN ACCOUNT? SIGN UP
										</Link>
									</Box>
								</Typography>
							</Grid>
						</Grid>
					</form>
				</div>
			</Container>
		</>
	);
};
export default Login;
