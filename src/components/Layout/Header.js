import React from "react";
import classes from "./Header.module.css";
import Imagemeals from "../../assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}> 
      <h1>Swaggy</h1>
      <HeaderCartButton onclick={props.onopencart}>Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={Imagemeals} alt="Food"/>
      </div>
    </>
  );
};

export default Header;
