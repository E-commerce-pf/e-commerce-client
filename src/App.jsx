import { Routes, Route } from 'react-router-dom';
import { Login } from './Pages/Loginjonathan/Login';
import { Home } from './Pages/Home/index';
import LogIn from './Pages/LogIn/LogIn';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import themecolor from './Components/temaConfig';

const useStyles = makeStyles((theme) => ({
	grid: {
		width: '100%',
		margin: '0px',
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: themecolor.palette.text.secondary,
		background: themecolor.palette.primary.main,
	},
}));

const App = () => {
	const classes = useStyles();
	return (
		<>
			<ThemeProvider theme={themecolor}>
				<Grid container spacing={4} className={classes.grid}>
					<Grid item>
						<Paper className={classes.paper}>
							<Routes>
								<Route path='*' element={<Home />} />
								<Route path='/' element={<Home />} />
								<Route path='/login' element={<Login />} />
								<Route path='/logIn' element={<LogIn />} />
							</Routes>
						</Paper>
					</Grid>
				</Grid>
			</ThemeProvider>
		</>
	);
};

export default App;
