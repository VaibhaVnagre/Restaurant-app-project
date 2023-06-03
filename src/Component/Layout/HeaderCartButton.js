import React,{useContext, useEffect, useState} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import cartContext from "../../Store/Create-context";

const HeaderCartButton = props =>{
    const [btnIsHighlighted, setbtnIsHighlighted] = useState(false);
    const cartdd = useContext(cartContext)
   
    const {items} = cartdd 

const numberofCartItems = items.reduce((currNumber, item)=>{
    return currNumber + item.amount;
}, 0);

const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`;

useEffect(()=>{
    if(cartdd.items.length === 0){
        return;
    }
   setbtnIsHighlighted(true);

   const timer = setTimeout(() => {
    setbtnIsHighlighted(false)
   }, 300);

   return () => {
    clearTimeout(timer);
   };
},[items])

    return(
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
           
            <span>
                Your Cart
            </span>
           
            
            <span className={classes.badge}>
                {numberofCartItems}
            </span>
        </button>
    )
};

export default HeaderCartButton;