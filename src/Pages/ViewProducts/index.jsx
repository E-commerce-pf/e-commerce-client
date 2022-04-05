import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

import { Navbar } from '../../Components/Navbar/Navbar';
import Filter from '../../Components/Filter';
import Order from '../../Components/Order';
import CardsProducts from '../../Components/CardsProducts';
import Loading from '../../Components/Loading';
import Footer from '../../Components/Footer';
import productsService from '../../Services/products';
import { setAllProducts } from '../../Redux/Actions/productsActions';
import { paginate } from '../../Utils/paginate';

import style from './ViewProducts.module.scss';

export default function ViewProducts() {
	const { category } = useParams();
	const dispatch = useDispatch();

	const [page, setPage] = useState(0);
	const elementsPerPage = 9;

	const productsFilter = useSelector(
		(state) => state.productsReducer.produtsFilter
	);

	useEffect(() => {
		productsService.getAllProducts().then((products) => {
			return dispatch(setAllProducts(products));
		});
	}, [dispatch]);

	if (!productsFilter) {
		return <Loading />;
	}

	const next = () => {
		setPage(page + 1);
	};

	const previous = () => {
		setPage(page - 1);
	};

	return (
		<div className={style.container}>
			<Navbar />
			<Filter category={category} />
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<Order />
				<div>
					<CardsProducts
						products={paginate(productsFilter, page, elementsPerPage)}
					/>
					<div className={style.paginate}>
						<Button onClick={previous}>Previous</Button>
						<Button onClick={next}>Next</Button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
