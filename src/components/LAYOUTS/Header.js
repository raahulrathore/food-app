import React from "react";
import classes from "./Header.module.css";
import HeaderImager from "../assets/HeaderBackground.jpg";
import CartButton from "./CartButton";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Hunger Jacks!</h1>
        {console.log(props.overlayOpen)}
        <CartButton
          onClick={props.overlayOpen}
          overlayOpen={props.overlayOpen}
        >
          Cart
        </CartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={HeaderImager} alt="Header display" />
      </div>
    </>
  );
};
export default Header;
