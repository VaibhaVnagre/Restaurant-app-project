import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import cartContext from "../../Store/Create-context";

const Cart = (props) => {
  const cartctn = useContext(cartContext);

  const TotalAmount = `$${cartctn.totalAmount.toFixed(2)}`;
  const hasItems = cartctn.items.length > 0;

  const cartItemRemoveHandeler = (id) => {
    cartctn.removeItem(id)
  };

  const cartItemAddHandeler = (item) => {
    cartctn.addItem(item)
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartctn.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.Price}
          onRemove = {cartItemRemoveHandeler.bind(null, item.id)}
          onAdd = {cartItemAddHandeler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Ammount</span>
        <span>{TotalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
