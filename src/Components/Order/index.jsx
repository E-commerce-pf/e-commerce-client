import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Select, MenuItem } from '@mui/material';
import Button from '@mui/material/Button';

import { setOrderProducts } from '../../Redux/Actions/productsActions';
import style from './Order.module.scss';

export default function Order() {
	const dispatch = useDispatch();

	const [order, setOrder] = useState({
		orderBy: 'stock',
		order: 'min-max',
	});

	const handleChange = (event) => {
		const name = event.target.name;
		setOrder({
			...order,
			[name]:
				name === 'order'
					? order.order === 'min-max'
						? 'max-min'
						: 'min-max'
					: event.target.value,
		});
		dispatch(
			setOrderProducts({
				...order,
				[name]:
					name === 'order'
						? order.order === 'min-max'
							? 'max-min'
							: 'min-max'
						: event.target.value,
			})
		);
	};

	return (
		<div className={style.container}>
			<Button name='order' onClick={handleChange} style={{ width: '100%' }}>
				{order.order === 'min-max' ? 'Max-Min' : 'Min-Max'}
			</Button>
			<Select
				name='orderBy'
				value={order.orderBy}
				onChange={handleChange}
				sx={{ width: '100%' }}
			>
				<MenuItem value='stock'>Stock</MenuItem>
				<MenuItem value='price'>Price</MenuItem>
				<MenuItem value='discount'>Discount</MenuItem>
			</Select>
		</div>
	);
}
