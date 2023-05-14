import React from "react";
import classes from "./Mealitem.module.css";
import MealitemForm from "./MealitemForm";

const Mealitem = (props) => {
  const Price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{Price}</div>
      </div>

      <div>
        <MealitemForm/>
      </div>
    </li>
  );
};
export default Mealitem;
