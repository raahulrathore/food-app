import classes from "./MealItemForm.module.css";
import Input from "../FRONTEND/Input";
const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        inputLabel="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>Add to Card</button>
    </form>
  );
};
export default MealItemForm;
