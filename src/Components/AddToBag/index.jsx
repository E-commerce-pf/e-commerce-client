import React from 'react';
import { useDispatch } from 'react-redux';
import { addProductToBag } from '../../Redux/Actions/productsActions';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const AddToBag = ({ text, id }) => {
	const dispatch = useDispatch();

	const addToCart = (id) => {
		dispatch(addProductToBag(id));
	};

	return (
		<AddShoppingCartIcon onClick={() => addToCart(id)}>
			{text}
		</AddShoppingCartIcon>
	);
};

export default AddToBag;
