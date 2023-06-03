import React,{useRef,useState} from "react";
import Input from "../../UI/Input";
import classes from "./MealitemForm.module.css";


const MealitemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const ammountInputRef = useRef();
 

  const submitHandeler = (event)=>{
   event.preventDefault()
   
   const enteredAmount = ammountInputRef.current.value;
   const enteredAmountNumber = +enteredAmount;

   if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5 ){
        setAmountIsValid(false);
        return;
   }
   props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form}>
     
      <Input
      ref = {ammountInputRef}
        label="Ammount"
        input={{
          id: "ammount"+ props.id ,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={classes.button} onClick={submitHandeler}>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};
export default MealitemForm;
