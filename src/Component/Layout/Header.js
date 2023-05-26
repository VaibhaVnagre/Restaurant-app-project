import React, { Fragment,useContext } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import cartContext from "../../Store/Create-context";

const Header = (props) => {
  const cart = useContext(cartContext)
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
