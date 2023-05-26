import React,{useContext} from "react";
import Input from "../../UI/Input";
import classes from "./MealitemForm.module.css";
import cartContext from "../../../Store/Create-context";

const MealitemForm = (props) => {
  const cartcntx = useContext(cartContext)

  const addItemToCart = (event)=>{
   event.preventDefault()
   const quantity = document.getElementById("ammount" +props.id).value
   cartcntx.addItem({...props.item, quantity:quantity})
   console.log('addItemTocart', cartcntx)

  }
  return (
    <form className={classes.form}>
      {console.log('inside render',cartcntx.items)}
      <Input
        label="Ammount"
        input={{
          id: "ammount" +props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={classes.button} onClick={addItemToCart}>+ Add</button>
    </form>
  );
};
export default MealitemForm;
