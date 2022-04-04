import { Autocomplete, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
	const Search = styled('div')(({ theme }) => ({
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	}));

	const SearchIconWrapper = styled('div')(({ theme }) => ({
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}));

	const StyledInputBase = styled(InputBase)(({ theme }) => ({
		color: 'inherit',
		'& .MuiInputBase-input': {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)})`,
			transition: theme.transitions.create('width'),
			width: '100%',
			[theme.breakpoints.up('md')]: {
				width: '20ch',
			},
		},
	}));
	const [input, setInput] = useState(null);
	const products = useSelector((state) => state.productsReducer.allProducts);
	const navigate = useNavigate();

	return (
		<Search>
			<Autocomplete
				color='inherit'
				options={products}
				isOptionEqualToValue={(option, value) => option.title === value.title}
				getOptionLabel={(option) => option.title}
				value={input}
				onChange={(event, newValue) => {
					setInput(newValue);
					if (newValue) {
						navigate(`/productDetail/${newValue.id}`);
					} else {
						navigate('/');
					}
				}}
				sx={{ width: 300 }}
				renderInput={(params) => (
					<TextField {...params} label={<SearchIcon />} />
				)}
			></Autocomplete>
		</Search>
	);
};

export default SearchBar;
