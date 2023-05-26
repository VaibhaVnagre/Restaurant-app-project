import React, { useState } from "react";
import cartContext from "./Create-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([])
  const addItemHandeler = (item) => {
    updateItems([...items, item])
  };
  const removeItemHandeler = (id) => {};

  const CartContext = {
    items: items,
    toatalPrice: 0,
    addItem: addItemHandeler,
    removeItem: removeItemHandeler,
    message : "goat"
  };

  return <cartContext.Provider value={CartContext}>{props.children}</cartContext.Provider>;
};
export default CartProvider;
