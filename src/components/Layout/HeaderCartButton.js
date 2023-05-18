
import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"
import { useContext } from "react"
import CartContext from "../../store/cart.context"


const HeaderCartButton = (props) =>{
    const cartctx = useContext(CartContext)
    const NoOfCartItems = cartctx.items.reduce((previtem,item)=>{
        return previtem + item.amount},0)
    return(<>
        <button className={classes.button} onClick={props.onclick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{NoOfCartItems}</span>
        </button>
        </>
    )
}



export default HeaderCartButton