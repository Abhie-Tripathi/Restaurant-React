import Cart from "../Cart/Cart"
import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"
import {useState} from "react"


const HeaderCartButton = () =>{
    const [iscartopen,setiscartopen] = useState(false)
    const openCartHandler = () =>{
        setiscartopen(true)
    }
    return(<>
        <button className={classes.button} onClick={openCartHandler}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>0</span>
        </button>
        {iscartopen && <Cart onclick={setiscartopen}/>}
        </>
    )
}



export default HeaderCartButton