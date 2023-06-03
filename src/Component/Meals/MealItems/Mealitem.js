import React, {useContext} from "react";
import classes from "./Mealitem.module.css";
import MealitemForm from "./MealitemForm";
import cartContext from "../../../Store/Create-context";

const Mealitem = (props) => {
  const cartcntx = useContext(cartContext);
  const Price = `$${props.price.toFixed(2)}`;

  const addToCartHandeler = amount =>{
     cartcntx.addItem({
      id : props.id,
      name : props.name,
      amount : amount,
      Price : props.price

     })
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{Price}</div>
      </div>

      <div>
        <MealitemForm onAddToCart={addToCartHandeler}/>
      </div>
    </li>
  );
};
export default Mealitem;
