import React from 'react';
import { FaHeadphonesAlt } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoPersonOutline } from 'react-icons/io5';
import { BsBag } from 'react-icons/bs';
import Everylogopf from '../../Assets/images/Everylogopf.png';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar';
import ShoppingBag from '../ShoppingBag';

export const Navbar = () => {
	const navigate = useNavigate();
	return (
		<>
			{' '}
			<div className='navbar'>
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
			</div>
		</>
	);
};
