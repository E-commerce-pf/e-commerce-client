import CardProduct from '../CardProduct';
import style from './CardsProducts.module.scss';
import Container from '@material-ui/core/Grid';

const CardsProducts = ({ products }) => {
	if (products.length === 0) {
		return <h1>No se encontraron productos...</h1>;
	}

	return (
		<Container sx={{ py: 8 }} maxWidth='lx'>
			{products.map((product) => {
				return <CardProduct {...product} key={product.id} />;
			})}
		</Container>
	);
};

export default CardsProducts;
