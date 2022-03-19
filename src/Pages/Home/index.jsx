import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import productsService from '../../Services/products';
import { setAllProducts } from '../../Redux/Actions/productsActions';
import imgHome2 from '../../Assets/images/imgHome2jpg.jpg';
import Loading from '../../Components/Loading';
import Landing from '../../Components/Landing/Landing-page';
import Footer from '../../Components/Footer';
import './Home.css';
import { Navbar } from '../../Components/Navbar/Navbar';
import Filter from '../../Components/Filter';

import CardsProducts from '../../Components/CardsProducts';
import { Paginate } from '../../Utils/paginate';

export const Home = () => {
	const productsFilter = useSelector(
		(state) => state.productsReducer.produtsFilter
	);
	const dispatch = useDispatch();

	const [pageNumber, setPageNumber] = useState(0);
	const elemPage = 8;

	useEffect(() => {
		productsService.getAllProducts().then((data) => {
			dispatch(setAllProducts(data));
		});
	}, [dispatch]);

	if (!productsFilter) {
		return <Loading />;
	}

	return (
		<>
			<Navbar />
			<CardsProducts products={productsFilter} />
		</>
	);
};
