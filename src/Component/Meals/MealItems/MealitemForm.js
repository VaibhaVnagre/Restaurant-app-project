import Input from "../../UI/Input";
import classes from "./MealitemForm.module.css";
const MealitemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Ammount"
        input={{
          id: "ammount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={classes.button}>+ Add</button>
    </form>
  );
};
export default MealitemForm;
