import React, { useState, useEffect } from 'react';
import { FaHeadphonesAlt } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoPersonOutline } from 'react-icons/io5';
import Everylogopf from '../../Assets/Images/Everylogopf_gris.png';
import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar';
import ShoppingBag from '../ShoppingBag';
import categoriesService from '../../Services/category';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

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

export const Navbar = ({ filter, state, setState,noCart }) => {
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
      {" "}
      <div className={styles.navbar}>
        <div className={styles.containerInfo1}>
          <div className={styles.homeImg}>
            <Link to="/">
              <img src={Everylogopf} alt="img" width="150px" height="100px" />
            </Link>
          </div>

          {filter ? (
            <>
              <button value="all" onClick={handleOnClick}>
                View All
              </button>

              <div className={styles.selectCP}>
                <select onChange={handleOnClick}>
                  <option style={{ textAlign: "center" }} value="all">
                    All categories
                  </option>
                  {categories.map(({ id, name }) => (
                    <option
                      style={{ textAlign: "center" }}
                      key={id}
                      value={name}
                    >
                      {name}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.inputS}>
                <SearchBar />
              </div>
            </>
          ) : null}

          <div className={styles.homeSU}>
            <h2 onClick={() => setState(!state)}>
              <FaHeadphonesAlt /> Support
            </h2>
            <h2 onClick={() => navigate("/location")}>
              <HiOutlineLocationMarker /> Location
            </h2>
          </div>
          <div className={styles.homeFLC}>
            <button className={styles.login_}>
              <IoPersonOutline
                className={styles.login}
                onClick={() => navigate("/login")}
              />
            </button>
            {noCart!==true&&<ShoppingBag />}
          </div>
        </div>
        {/* {filter!==false&&<div className={styles.containerInfo2}>
                <div className={styles.selectCP}>
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
                </div> */}
      </div>
    </>
  );
};
