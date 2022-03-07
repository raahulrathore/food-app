import React from "react";
import classes from "./Header.module.css";
import HeaderImager from "../assets/HeaderBackground.jpg";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Hunger Jacks!</h1>
      </header>
      <div className={classes["main-image"]}>
        <img src={HeaderImager} alt="Header display" />
      </div>
    </>
  );
};
export default Header;
