import CardProduct from '../CardProduct';
import style from './CardsProducts.module.scss';
import Container from '@material-ui/core/Grid';
import Grid from '@material-ui/core/Grid';

const CardsProducts = ({ products }) => {
	if (products.length === 0) {
		return <h1>No se encontraron productos...</h1>;
	}
	console.log(products);
	return (
		<Container sx={{ py: 8 }} maxWidth='lx'>
			<Grid container spacing={2}>
				{products.map((product) => {
					return (
						 <Grid item xs={12} sm={6} md={2} >
							<CardProduct {...product} key = {product.id} />
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
};
export default CardsProducts;
