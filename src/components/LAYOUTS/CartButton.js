import CartIcon from "./CartIcon";
import classes from "./CartButton.module.css";
const CartButton = (props) => {
  return (
    <>
      {console.log(props.overlayOpen)}
      <button className={classes.button} onClick={props.overlayOpen}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}> 4 </span>
      </button>
    </>
  );
};
export default CartButton;
