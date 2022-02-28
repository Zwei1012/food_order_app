import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Buta-No-Shogayaki (Ginger Pork)",
    description:
      "The word yaki means literally “grilled.” This dish is prepared by grilling thin slices of pork dressed with a delicate sauce of mirin, soy sauce, sake (Japanese rice wine), granola oil mixed with sliced onions, and ginger.",
    price: 10.99,
  },
  {
    id: "m2",
    name: " Gyudon",
    description:
      "A bawl of steamed rice is topped with thinly sliced beef and tender onion, simmered in dashi broth (a popular Japanese ingredient) and seasoned with mirin and soy sauce.",
    price: 8.5,
  },
  {
    id: "m3",
    name: "Gyukatsu (Beef cutlet)",
    description:
      "A wonderful beef variation of the popular pork-based tonkatsu (which we also recommend you try) is a dish of deep-fried breaded beef, usually served with cabbage, barley rice, miso soup, and potato salad, and pickles.",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Kushikatsu",
    description: "Crunchy deep-fried skewered meat, fish, or vegetables.",
    price: 18.99,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
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
export default AvailableMeals;
