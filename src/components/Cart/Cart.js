import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart.context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartctx = useContext(CartContext);

  const totalAmount = `$${cartctx.totalAmount.toFixed(2)}`;

  const hasitems = cartctx.items.length > 0;

  const cartItemRemoveHandler = (id) =>{
    cartctx.removeItem(id)
  }

  const cartItemAddHandler = (item) =>{
    cartctx.addItem({...item,amount:1})
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onclick={props.onclose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onclose}>
          Close
        </button>
        {hasitems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
