const CardProduct = ({ name, id, description, price }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

export default CardProduct;
