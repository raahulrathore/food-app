import Card from "../FRONTEND/Card";
import classes from "./AvailableMeal.module.css";
import MealItem from "./MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chole Bhature",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    price: 109.33,
  },
  {
    id: "m2",
    name: "Pav Bhaji",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    price: 76.5,
  },
  {
    id: "m3",
    name: "White Sauce Pasta",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    price: 92.99,
  },
  {
    id: "m4",
    name: "Paneer Tikka",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
    price: 158.99,
  },
];
const AvailableMeal = () => {
   const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeal;
