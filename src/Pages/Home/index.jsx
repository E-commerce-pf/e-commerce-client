import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import productsService from "../../Services/products";
import { setAllProducts } from "../../Redux/Actions/productsActions";
import {FaHeadphonesAlt} from 'react-icons/fa'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {IoPersonOutline} from 'react-icons/io5'
import {AiFillHeart} from 'react-icons/ai'
import {BsBag} from 'react-icons/bs'
import Everylogopf from '../../Assets/Images/Everylogopf.png'
import imgHome2 from '../../Assets/Images/imgHome2jpg.jpg'
import Loading from "../../Components/Loading";
import {CardProduct} from "../../Components/CardProduct";
import { Footer } from "../../Components/Footer";

const Home = () => {
  const products = useSelector((state) => state.productsReducer.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    productsService.getAllProducts().then((data) => {
      dispatch(setAllProducts(data));
    });
  }, [dispatch]);

  if (!products) {
    return <Loading />;
  }

  return (
    <div className="container_home">
      <div className="container-info-1">
        <div className='home_img'>
        <img src={Everylogopf} alt="img" width="150px" height="100px" />
        </div>
        <div className='home_SU'>
        <h2><FaHeadphonesAlt/> Soporte</h2>
        <h2><HiOutlineLocationMarker/> Ubicacion</h2>
        </div>
        <div className='home_FLC'>
        <h2><AiFillHeart/></h2>
        <h2><IoPersonOutline/></h2>
        <h2><BsBag/></h2>
        </div>
      </div>
      <div className="container-info-2">
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
        <div className="input_S">
        <input type="text"
        placeholder="Buscar producatos, articulos" />
        </div>
      </div>
      <div className="container-info-3">
        <img src={imgHome2} alt="imagen" width='100%' height='250px' />
      </div>
      <div className='container-info-4'>
        <div className='nuevo'>
          <h2>Nuevo en </h2>
        </div>
        <div className='card'>
        {
          products?.map(el=>(
            <CardProduct key={el.id}img={el.image} title={el.title} price={el.price} category={el.category}/>
          ))
        }
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
