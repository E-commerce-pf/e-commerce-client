import React, { useState, useEffect } from 'react';
import { FaHeadphonesAlt } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import logoWhite from '../../Assets/Images/logoWhite.png';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar';
import ShoppingBag from '../ShoppingBag';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import PersonIcon from '@mui/icons-material/Person';

import MoreIcon from '@mui/icons-material/MoreVert';
import categoriesService from '../../Services/category';

export const Navbar = ({ filter, state, setState, noCart }) => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	);

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton size='large' aria-label='show 4 new mails' color='inherit'>
					<Badge >
						<PersonIcon/>
					</Badge>
				</IconButton>
				<p>Profile</p>
			</MenuItem>
			<MenuItem>
				<IconButton >
					<Badge >
					{noCart!==true&&<ShoppingBag />}
					</Badge>
				</IconButton>
				<p>Shopping Bag</p>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
			</MenuItem>
		</Menu>
	);

	const navigate = useNavigate();

	const [categories, setCategories] = useState([]);

	useEffect(() => {
		categoriesService.getAllCategories().then((data) => {
			setCategories(data);
		});
	}, []);

	const handleOnClick = (event) => {
		navigate(`/products/${event.target.value}`);
	};

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static'>
					<Toolbar>
						<Link to='/'>
							<img src={logoWhite} alt='img' width='50px' height='70px' />
						</Link>
						<>
							<SearchBar />
						</>
						<>
							<IconButton
								onClick={() => setState(!state)}
								color='inherit'
								aria-label='open drawer'
							>
								<FaHeadphonesAlt /> Support
							</IconButton>
							<IconButton
								color='inherit'
								aria-label='open drawer'
								onClick={() => navigate('/location')}
							>
								<HiOutlineLocationMarker /> Location
							</IconButton>
						</>
						<Box sx={{ flexGrow: 1 }} />
						<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
							<IconButton
								size='large'
								aria-label='show 4 new mails'
								color='inherit'
							>
								<Badge onClick={() => navigate('/login')}>
									<PersonIcon />
								</Badge>
							</IconButton>
							<IconButton
								size='large'
								aria-label='show 17 new notifications'
								color='inherit'
							>
								<Badge>
								{noCart!==true&&<ShoppingBag />}
								</Badge>
							</IconButton>
						
						</Box>
						<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size='large'
								aria-label='show more'
								aria-controls={mobileMenuId}
								aria-haspopup='true'
								onClick={handleMobileMenuOpen}
								color='inherit'
							>
								<MoreIcon />
							</IconButton>
						</Box>
					</Toolbar>
				</AppBar>
				{renderMobileMenu}
				{renderMenu}
			</Box>
		</>
	);
};
