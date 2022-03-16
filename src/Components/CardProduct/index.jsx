import AddToBag from "../AddToBag";

const CardProduct = ({ name, id, description, price }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <p>{price}</p>
      <AddToBag text={"Add to cart"} id={id} />
    </div>
  );
};

export default CardProduct;
