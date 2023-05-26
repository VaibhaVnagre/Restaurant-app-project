import React,{useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import cartContext from "../../Store/Create-context";

const HeaderCartButton = props =>{
    const cartdd = useContext(cartContext)
   let quantity = 0
   cartdd.items.forEach((item)=>{
    quantity = quantity+ Number(item.quantity)
   })
    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
           
            <span>
                Your Cart
            </span>
           
            
            <span className={classes.badge}>
                {quantity}
            </span>
        </button>
    )
};

export default HeaderCartButton;