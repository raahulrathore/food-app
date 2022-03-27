import { useContext } from "react";
import CartIcon from "./CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemCount = cartCtx.items.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);
  return (
    <>
      {console.log(props.overlayOpen)}
      <button className={classes.button} onClick={props.overlayOpen}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}> {cartItemCount} </span>
      </button>
    </>
  );
};
export default CartButton;
