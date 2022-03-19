import React from 'react';
import Everylogopf from '../../Assets/images/Everylogopf.png';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export const Navbar = () => {
	const navigate = useNavigate();
	return (
		<>
			{/* <div className='navbar'>
				<div className='container-info-1'>
					<div className='home_img'>
						<Link to='/'>
							<img src={Everylogopf} alt='img' width='150px' height='100px' />
						</Link>
					</div>
					<div className='home_SU'>
						<h2>
							<FaHeadphonesAlt /> Soporte
						</h2>
						<h2>
							<HiOutlineLocationMarker /> Ubicacion
						</h2>
					</div>
					<div className='home_FLC'>
						<h2>
							<IoPersonOutline onClick={() => navigate('/login')} />
						</h2>
						<ShoppingBag />
					</div>
				</div>
				<div className='container-info-2'>
					<div className='select_CP'>
						<select>
							<option>categoria</option>
							<option>categoria</option>
							<option>categoria</option>
						</select>
						<select>
							<option>Precio</option>
							<option>Precio</option>
							<option>Precio</option>
						</select>
					</div>
					<div className='input_S'>
						<SearchBar />
					</div>
				</div>
			</div> */}

			<GlobalStyles
				styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
			/>
			<CssBaseline />
			<AppBar
				position='static'
				color='default'
				elevation={0}
				sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
			>
				<Toolbar sx={{ flexWrap: 'wrap' }}>
					<Typography variant='h4' color='inherit' noWrap sx={{ flexGrow: 1 }}>
						<img src={Everylogopf} alt='img' width='140px' height='90px' />
					</Typography>

					<IconButton
						onClick={() => navigate('/login')}
						href='#'
						sx={{ my: 1, mx: 1.5 }}
					>
						<FavoriteBorderIcon />
					</IconButton>

					<IconButton
						onClick={() => navigate('/login')}
						href='#'
						sx={{ my: 1, mx: 1.5 }}
					>
						<PersonOutlineIcon />
					</IconButton>
					<IconButton
						onClick={() => navigate('/login')}
						href='#'
						sx={{ my: 1, mx: 1.5 }}
					>
						<ShoppingBagIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</>
	);
};
