import React,{Fragment} from "react";
import MealSummary from "./MealSummary";
import AvailableMeals from "./AvailableMeals";

const Meal = ()=>{
    return(
        <Fragment>
            <MealSummary/>
            <AvailableMeals/>
        </Fragment>
    )
}
export default Meal;