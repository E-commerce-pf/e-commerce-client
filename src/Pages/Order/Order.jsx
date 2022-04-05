import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../Components/Footer';
import { Navbar } from '../../Components/Navbar/Navbar';
import style from './Order.module.scss';
import { createTransaction } from '../../Utils/transaction';
import Button from '@mui/material/Button';

export default function Order() {
	const user = useSelector((store) => store.userReducer.currentUser);
	const cart = useSelector((store) => store.productsReducer.bagProducts);
	const [bought, setBought] = useState(false);
	const initiateTransaction = (description) => {
		setBought(!bought);
		createTransaction(user.userId, description);
	};
	const [direction, setDirection] = useState({
		country: '',
		city: '',
		address: '',
	});

	const handleChangeDirection = (e) => {
		setDirection({ ...direction, [e.target.name]: e.target.value });
	};
	useEffect(() => {
		setDirection({
			country: user.country,
			city: user.city,
			address: user.address,
		});
	}, [user]);
	return (
		<div>
			<Navbar filter={false} noCart={true} />
			<div className={style.container}>
				<div>
					<div className={style.direction}>
						<h2>Shipping Address</h2>
						<form
							autoComplete='new-password'
							className={style.containerForm}
							onChange={handleChangeDirection}
						>
							<div>
								<p>Country</p>
								<input
									autoComplete='none'
									type='text'
									id='country'
									name='country'
									defaultValue={direction.country}
								/>
							</div>
							<div>
								<p>City</p>
								<input
									autoComplete='none'
									type='text'
									id='city'
									name='city'
									defaultValue={direction.city}
								/>
							</div>
							<div>
								<p>Address</p>
								<input
									autoComplete='none'
									type='text'
									id='address'
									name='address'
									defaultValue={direction.address}
								/>
							</div>
							<input
								type='text'
								autoComplete='on'
								value=''
								style={{
									display: 'none',
									opacity: 0,
									position: 'absolute',
									left: '-100000px',
								}}
								readOnly={true}
							/>
						</form>
					</div>
					{cart?.map(({ title, image, amount, price, discount }, i) => (
						<div key={i} className={style.containerProduct}>
							<img src={image[0]} alt='Product image' />
							<div>
								<p>{title}</p>
								<p className={style.description}>Cantidad: {amount}</p>
								<p className={style.description}>
									{discount ? (
										<span className={style.discount}>$ {price}</span>
									) : null}{' '}
									$ {price * (1 - discount)} c/u
								</p>
							</div>
						</div>
					))}
				</div>
				<div>
					<h2>Purchase summary</h2>
					<div className={style.container_summary}>
						<p>Products</p>
						<p>{cart?.length}</p>
					</div>
					<div className={style.container_summary}>
						<p>Total price</p>
						<p>
							{cart?.reduce(
								(acc, { price, discount, amount }) =>
									(acc += amount * price * (1 - discount)),
								0
							)}
						</p>
					</div>
				</div>
			</div>
			{!bought ? (
				<button
					className={style.btn_comprar}
					onClick={() => initiateTransaction('prueba')}
				>
					Buy products
				</button>
			) : (
				<button className={style.bought}>Processing purchase</button>
			)}
			<Footer />
		</div>
	);
}
