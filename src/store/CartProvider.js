import CartContext from "./cart.context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, actions) => {
    if(actions.type ==="ADD"){
        const updateditems = state.items.concat(actions.item)
        const updatedtotalamount = state.items.totalAmount + actions.item.price * actions.item.amount
        return({
            items:updateditems,
            totalAmount:updatedtotalamount
        })
    }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type:"ADD",item:item})
  };

  const removeItemfromCartHandler = (id) => {
    dispatchCartAction({type:"REMOVE",id:id})
  };

  const cartcontext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemfromCartHandler,
  };

  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
