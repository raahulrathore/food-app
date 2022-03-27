import classes from "./MealItemForm.module.css";
import Input from "../FRONTEND/Input";
import React from "react";
const MealItemForm = (props) => {
  const amountRef = React.useRef();
  const [isAmountValid, setIsAmountValid] = React.useState(true);
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountRef.current.value;
    const enteredAmountNum = +enteredAmount;
    if (
      enteredAmount.trim() === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 10
    ) {
      setIsAmountValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNum)
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        inputLabel="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: 1,
          max: 10,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>Add to Card</button>
      {!isAmountValid && <p>Enter a Valid Amount!!</p>}
    </form>
  );
};
export default MealItemForm;
