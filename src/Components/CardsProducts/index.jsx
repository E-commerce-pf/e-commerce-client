import CardProduct from "../CardProduct";
import style from "./CardsProducts.module.scss";

const CardsProducts = ({ products }) => {
  if (products.length === 0) {
    return <h1>No se encontraron productos...</h1>;
  }

  return (
    <div className={style.cards}>
      {products.products.map((product) => {
        return <CardProduct {...product} key={product.id} />;
      })}
    </div>
  );
};

export default CardsProducts;
