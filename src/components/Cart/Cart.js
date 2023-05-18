import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (porps) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: 2, name: "Sushi", price: 24.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>24.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
