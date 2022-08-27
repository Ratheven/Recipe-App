import { useAuth0 } from "@auth0/auth0-react";

const ShoppingList = ({ dish }) => {
  console.log(dish, "dishh");
  const { isAuthenticated, user } = useAuth0();
  const handleSubmit = () => {
    console.log("koko")
    if (isAuthenticated) {
      fetch(`/user/favoriteRecipe/add`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ingredients: dish.ingredients,
          name: dish.ingredients,
          sub: user.sub,
          dish: dish,
        }),
      });
    }
  };

  return <button onClick={() => handleSubmit()}>Add</button>;
};
export default ShoppingList;
