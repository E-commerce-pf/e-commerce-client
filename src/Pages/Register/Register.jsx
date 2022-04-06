import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../Redux/Actions/userActions';
import style from './Register.module.scss';
import { countries } from '../../Utils/countries';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Everylogopf from '../../Assets/Images/Everylogopf.svg';
import { ThemeProvider } from '@material-ui/styles';
import Themes from '../../../src/Components/themes';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';


//COMPONENTES
import { ToastContainer } from 'react-toastify';
import { notifyError, notifySuccess } from '../../Utils/notifications';

const validateData = (input, error, name) => {
	if (
		input.email === input.email2 &&
		input.password === input.password2 &&
		input.name &&
		input.lastName &&
		input.email2.length &&
		input.password2.length
	) {
		document.querySelector('#submit').classList.add(style.enable);
	} else {
		document.querySelector('#submit').classList.remove(style.enable);
	}

	if (name === 'email' || name === 'email2') {
		return {
			...error,
			email: input.email !== input.email2 ? 'Los correos deben coincidir' : '',
		};
	}

	if (name === 'password' || name === 'password2') {
		return {
			...error,
			password:
				input.password !== input.password2
					? 'Las contraseñas deben coincidir'
					: '',
		};
	}

	return error;
};

let ignorarEstaVariable;
const Register = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [userData, setUserData] = useState({
		name: '',
		lastName: '',
		email: '',
		email2: '',
		password: '',
		password2: '',
		country: '',
	});

	const [error, setError] = useState({
		name: '',
		lastName: '',
		email: '',
		password: '',
		country: '',
	});

	const handlerChange = (event) => {
		setUserData({
			...userData,
			[event.target.name]: event.target.value,
		});
		setError(
			validateData(
				{
					...userData,
					[event.target.name]: event.target.value,
				},
				error,
				event.target.name
			)
		);
	};

	//Funcion encargada de enviar la informacion del formulario para crear un usuario
	const handlerSubmit = async (e) => {
		e.preventDefault();
		const { password2, email2, ...newUser } = userData;
		console.log(newUser);

		if (!userData.country)
			return notifyError("Wait! We still don't know what your country is");

		await axios
			.post('/api/register', { ...userData })
			.then((res) => {
				notifySuccess(res.data.success);
				navigate('/login');
			})
			.catch((err) => {
				notifyError(err.response.data.error);
			});
	};

	return (
		<ThemeProvider theme={Themes.default}>
			{/* <div className={style.Backdiv}>
        <Link className={style.Back} to="/login">Go Back</Link>
      </div>
    <div className={style.container}>
      <div className={style.Cont}>
      <ToastContainer />
      <Form onSubmit={(e) => handlerSubmit(e)} className={style.formContainer} >
        <div>
          <h2 className={style.titleP}>Sign up</h2>
        </div>
        <div className={style.personalData}>
          <div className={style.container}>
            <TextField
              className={style.textfield}
              name="name"
              value={userData.name}
              onChange={handlerChange}
              variant="outlined"
              label="Name"
            />
          </div>

          <div className={style.container}>
            <TextField
              className={style.textfield}
              name="lastName"
              value={userData.lastName}
              onChange={handlerChange}
              variant="outlined"
              label="Last name"
            />
          </div>
        </div>

        <TextField
          className={style.textfield}
          type="email"
          name="email"
          placeholder="example@example.com"
          value={userData.email}
          onChange={handlerChange}
          variant="outlined"
          label="Email"
          color={error.email ? "error" : "success"}
        />

        <TextField
          className={style.textfield}
          type="email"
          name="email2"
          placeholder="example@example.com"
          value={userData.email2}
          onChange={handlerChange}
          variant="outlined"
          label="Repeat Email"
          color={error.email ? "error" : "success"}
        />

        {error.email && <p className={style.warning}>{error.email}</p>}

        <TextField
          className={style.textfield}
          type="password"
          name="password"
          value={userData.password}
          onChange={handlerChange}
          variant="outlined"
          label="Password"
          color={error.password ? "error" : "success"}
        />

        <TextField
          className={style.textfield}
          type="password"
          name="password2"
          value={userData.password2}
          onChange={handlerChange}
          variant="outlined"
          label="Repeat password"
          color={error.password ? "error" : "success"}
        />
        {error.password && <p className={style.warning}>{error.password}</p>}

        <InputLabel id="pais-label">Country</InputLabel>
        <select className={style.textfield} name="country" onChange={handlerChange}>
          {countries.map((country, index) => {
            return (
              <option className={style.optionC} key={index} name={country.value}>
                {country.value}
              </option>
            );
          })}
        </select>

        <div>
        <input
          type="submit"
          value="Create account"
          id="submit"
          className={style.disable}
        />
        </div>
      </Form>
      </div>
    </div> */}
			<Grid
				onSubmit={(e) => handlerSubmit(e)}
				container
				component='main'
				sx={{ height: '100vh' }}
			>
				<CssBaseline />
				<Grid
					item
					xs={false}
					sm={4}
					md={7}
					sx={{
						backgroundImage: 'url(https://i.ibb.co/6gr0236/Cliente.jpg)',
						backgroundRepeat: 'no-repeat',
						backgroundColor: (t) =>
							t.palette.mode === 'light'
								? t.palette.grey[50]
								: t.palette.grey[900],
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				/>
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
							<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
								<HowToRegIcon />
							</Avatar>
							<Typography component='h1' variant='h5'>
								Register to get started with your account
							</Typography>
						<FormControl onSubmit={(e) => handlerSubmit(e)}>
							<Box
								component='form'
								noValidate
								onSubmit={handlerSubmit}
								sx={{ mt: 1 }}
							>
								<TextField
									margin='normal'
									required
									fullWidth
									id='name'
									label='Name'
									name='name'
									autoComplete='name'
									value={userData.name}
									onChange={handlerChange}
								/>
								<TextField
									margin='normal'
									required
									fullWidth
									name='lastName'
									label='Last name'
									type='lastName'
									id='lastName'
									autoComplete='current-lastName'
									value={userData.lastName}
									onChange={handlerChange}
								/>
								<TextField
									type='email'
									name='email'
									placeholder='example@example.com'
									value={userData.email}
									onChange={handlerChange}
									variant='outlined'
									label='Email'
									color={error.email ? 'error' : 'success'}
									fullWidth
								/>
								<TextField
									type='email'
									name='email2'
									placeholder='example@example.com'
									value={userData.email2}
									onChange={handlerChange}
									variant='outlined'
									label='Repeat Email'
									color={error.email ? 'error' : 'success'}
									margin='normal'
									required
									fullWidth
								/>
								<TextField
									margin='normal'
									required
									fullWidth
									type='password'
									name='password'
									value={userData.password}
									onChange={handlerChange}
									variant='outlined'
									label='Password'
									color={error.password ? 'error' : 'success'}
								/>
								<TextField
									margin='normal'
									required
									fullWidth
									type='password'
									name='password2'
									value={userData.password2}
									onChange={handlerChange}
									variant='outlined'
									label='Repeat password'
									color={error.password ? 'error' : 'success'}
								/>
								<>
							
        <select className={style.textfield} name="country" onChange={handlerChange}>
          {countries.map((country, index) => {
            return (
              <option className={style.optionC} key={index} name={country.value}>
                {country.value}
              </option>
            );
          })}
        </select>
								</>
								<Button
									type='submit'
									fullWidth
									variant='contained'
									sx={{ mt: 3, mb: 2 }}
                  
          value="Create account"
          id="submit"
								>
									Register Now
								</Button>
							</Box>
						</FormControl>
					</Box>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};

export default Register;
