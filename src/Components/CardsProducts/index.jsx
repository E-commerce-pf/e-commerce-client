import CardProduct from '../CardProduct';
import Container from '@material-ui/core/Grid';
import Grid from '@material-ui/core/Grid';
import { useSelector } from "react-redux";

const CardsProducts = ({ products, classes }) => {
	const bagProducts = useSelector((store) => store.productsReducer.bagProducts);
	if (products.length === 0) {
		return <h1>Not find products...</h1>;
	}
	return (
		<Container sx={{ py: 8 }}>
			<Grid container spacing={1}>
				{products.map((product, index) => {
					return (
						<Grid key={index} item xs={10} sm={6} md={4}>
							<CardProduct {...product} bagProducts={bagProducts} />
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
};
export default CardsProducts;
