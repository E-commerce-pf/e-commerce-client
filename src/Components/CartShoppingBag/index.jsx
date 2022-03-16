import CardItem from "../CartItem";

const CartShoppingBag = ({ cartItems, addToCart, removeFromCart }) => {

  console.log(cartItems);

  return (
    <aside>
      <h1>Shopping Bag</h1>
      {cartItems.length === 0 ? <p>No tienes productos en la Bolsa</p> : null}
      {cartItems.map((item) => (
        <CardItem key={item.id} {...item} />
      ))}
    </aside>
  );
};

export default CartShoppingBag;
