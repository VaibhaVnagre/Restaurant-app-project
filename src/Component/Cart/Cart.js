import React,{useContext} from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import cartContext from "../../Store/Create-context";

const Cart = (props) => {
  const cartctn = useContext(cartContext)
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartctn.items.map((item) => (
        <li>Name : {item.name} Price : {item.price} Quantity : {item.quantity}</li>
      ))}
    </ul>
  );
  return(
    <Modal onClose={props.onClose} >
        {cartItems}
        <div className={classes.total}>
            <span>Total Ammount</span>
            <span>35.62</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  ) ;
};
export default Cart;