import CardItem from "../CartItem";
import styled from "./CartShoppingBag.module.css";

const CartShoppingBag = ({ cartItems }) => {
  return (
    <aside className={styled.container}>
      <h1 className={styled.text_shop}>Shopping Bag</h1>
      {cartItems.length === 0 ? <p className={styled.text_shop}>No tienes productos en la Bolsa</p> : null}
      {cartItems.map((item) => (
        <CardItem key={item.id} {...item} />
      ))}
      <p className={styled.text_shop}>
        Total:{" "}
        {(cartItems.reduce(
          (acum, product) => product.price * product.amount + acum,
          0
        )).toFixed(2)} $
      </p>
    </aside>
  );
};

export default CartShoppingBag;
