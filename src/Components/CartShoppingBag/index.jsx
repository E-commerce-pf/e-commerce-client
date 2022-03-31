import CardItem from "../CartItem";
import styled from "./CartShoppingBag.module.css";
import { FaRegFrownOpen } from "react-icons/fa";
import { useSelector } from "react-redux";
import { notifyError } from "../../Utils/notifications";
import { addProductToCartDb } from "../../Utils/shoppingBag";

const CartShoppingBag = ({ cartItems, deleteCart }) => {
  const user = useSelector((store) => store.userReducer.currentUser);
  const buyProduct = () => {
    if (!user) {
      notifyError("You aren't logged in");
    } else {
      if (cartItems.length)
        cartItems.forEach((p) => {
          addProductToCartDb(p.id, user.userId, p.amount);
        });
      else notifyError("You don't have products in the cart");
    }
  };
  return (
    <aside className={styled.container}>
      <h1 className={styled.text_shop}>SHOPPING BAG</h1>
      {cartItems.length === 0 ? (
        <div className={styled.text_shop}>
          You don't have products in the cart
          <FaRegFrownOpen />
        </div>
      ) : null}
      {cartItems.map((item) => (
        <CardItem key={item.id} {...item} />
      ))}
      <p className={styled.text_total}>
        Total amount:{" "}
        {cartItems
          .reduce((acum, product) => product.price * product.amount + acum, 0)
          .toFixed(2)}{" "}
        $
      </p>
      <div className={styled.container_buttons}>
        <button className={styled.btn_quitar} onClick={deleteCart}>
          Empty cart
        </button>
        <button className={styled.btn_comprar} onClick={buyProduct}>
          Keep buying
        </button>
      </div>
    </aside>
  );
};

export default CartShoppingBag;
