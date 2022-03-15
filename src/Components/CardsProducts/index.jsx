import CardProduct from "../CardProduct";

const CardsProducts = ({ products }) => {
  if (products.length === 0) {
    return <h1>No se encontraron productos...</h1>;
  }

  return (
    <div>
      {products.map((product) => {
        return <CardProduct {...product} key={product.id} />;
      })}
    </div>
  );
};

export default CardsProducts;
