import CardItem from '../CartItem';
import styled from './CartShoppingBag.module.css';
import { FaRegFrownOpen } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { notifyError } from '../../Utils/notifications';
import { addProductToCartDb } from '../../Utils/shoppingBag';
import { newCartChange } from '../../Redux/Actions/productsActions';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const CartShoppingBag = ({ cartItems, deleteCart }) => {
	const user = useSelector((store) => store.userReducer.currentUser);
	const cartChange = useSelector((store) => store.productsReducer.cartChange);
	const dispatch = useDispatch();
	const buyProduct = () => {
		if (!user) {
			notifyError("You aren't logged in");
		} else {
			if (cartItems.length) {
				dispatch(newCartChange(false));
				addProductToCartDb(user.userId, cartItems, cartChange);
			} else notifyError("You don't have products in the cart");
		}
	};
	return (
		<aside className={styled.container}>
			<Typography justifyContent="center" alignItems="center" variant="h5"
			 >SHOPPING BAG</Typography>
			{cartItems.length === 0 ? (
				<Typography>
					You don't have products in the cart
					<FaRegFrownOpen />
				</Typography>
			) : null}
			{cartItems.map((item) => (
				<CardItem key={item.id} {...item} />
			))}
			<p className={styled.text_total}>
				Total amount:{' '}
				{cartItems
					.reduce(
						(acum, product) =>
							product.price * (1 - product.discount) * product.amount + acum,
						0
					)
					.toFixed(2)}{' '}
				$
			</p>
			<div className={styled.container_buttons}>
				<Button className={styled.btn_quitar} onClick={deleteCart}>
					Empty cart
				</Button>
				<Button className={styled.btn_comprar} onClick={buyProduct}>
					Proceed to checkout
				</Button>
			</div>
		</aside>
	);
};

export default CartShoppingBag;
