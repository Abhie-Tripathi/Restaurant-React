import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {   
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: 2, name: "Sushi", price: 24.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  const closecartHandler = () =>{
    props.onclick(false)
  }
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>24.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={closecartHandler}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
