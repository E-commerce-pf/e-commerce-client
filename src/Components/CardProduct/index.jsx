const CardProduct = ({ name, id, description, price }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <p>{price}</p>
      <button>Agregar al Carrito</button>
    </div>
  );
};

export default CardProduct;
