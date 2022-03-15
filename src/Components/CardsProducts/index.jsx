import CardProduct from "../CardProduct";

const CardsProducts = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
        return <CardProduct {...product} key={product.id} />;
      })}
    </div>
  );
};

export default CardsProducts;
