import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return(
  <Fragment>
    <header className={classes.header}>
      <h1>ReactMeal</h1>
      <HeaderCartButton />
    </header>
    <div className={classes["main-image"]}>
      <img
        src="https://media.istockphoto.com/id/931308812/photo/selection-of-american-food.jpg?s=1024x1024&w=is&k=20&c=pjxPGorJvT5GjrDS3mcCJfOqXD9A9E0khQyebdycSQ8="
        alt="A Table Full Of Delicious Food !"
      />
    </div>
  </Fragment>
  )
  
};
export default Header;
