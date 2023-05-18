import CartContext from "./cart.context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, actions) => {
    if(actions.type ==="ADD"){
      const updatedtotalamount = state.totalAmount + actions.item.price * actions.item.amount
      const existingCartItemIndex = state.items.findIndex((item)=> item.id === actions.item.id)
      const existingCartItem = state.items[existingCartItemIndex]
      let updatedItems
      if(existingCartItem){
        const updatedItem = {...existingCartItem,amount: existingCartItem.amount + actions.item.amount}
        updatedItems = [...state.items]
        updatedItems[existingCartItemIndex] = updatedItem
      }
      else{
        updatedItems = state.items.concat(actions.item)
      }
        return({
            items:updatedItems,
            totalAmount:updatedtotalamount
        })
    }

    if(actions.type ==="REMOVE"){
      const existingCartItemIndex = state.items.findIndex((item)=> item.id === actions.id)
      const existingItem = state.items[existingCartItemIndex]
      const updatedtotalamount = state.totalAmount - existingItem.price
      let updatedItems
      if(existingItem.amount === 1){
        updatedItems = state.items.filter(item => item.id !== actions.id)
      }
      else{
        const updatedItem = {...existingItem,amount:existingItem.amount - 1}
        updatedItems = [...state.items]
        updatedItems[existingCartItemIndex] = updatedItem
      }
      return(
        {
          items: updatedItems,
          totalAmount: updatedtotalamount
        }
      )
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
