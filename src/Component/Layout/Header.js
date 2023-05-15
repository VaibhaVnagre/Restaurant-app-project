import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return(
  <Fragment>
    <header className={classes.header}>
      <h1>ReactMeal</h1>
      <HeaderCartButton onClick={props.onShowcart}/>
    </header>
    <div className={classes["main-image"]}>
      <img
        src="https://wallpapercave.com/wp/wp9443719.jpg"
        alt="A Table Full Of Delicious Food !"
      />
    </div>
  </Fragment>
  )
  
};
export default Header;
