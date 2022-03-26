import classes from "./Cart.module.css";
import Modal from "../FRONTEND/Modal";
const Cart = (props) => {
  const cartItems = (
    <ul className={classes.cartItems}>
      {" "}
      {[{ id: "c1", name: "Chole Bhature", amount: 200, quantity: 2 }].map(
        (item) => {
          <li>{item.name}</li>;
        }
      )}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total</span>
        <span>25</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
