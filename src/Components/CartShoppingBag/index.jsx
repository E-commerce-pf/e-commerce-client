import CardItem from "../CartItem";
import styled from "./CartShoppingBag.module.scss";

const CartShoppingBag = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <aside className={styled.container}>
      <h1>Shopping Bag</h1>
      {cartItems.length === 0 ? <p>No tienes productos en la Bolsa</p> : null}
      {cartItems.map((item) => (
        <CardItem key={item.id} {...item} />
      ))}
    </aside>
  );
};

export default CartShoppingBag;
