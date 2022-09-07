import { useAuth0 } from "@auth0/auth0-react";

const AddFavoriteRecipe = ({ dish }) => {
 
  const { isAuthenticated, user } = useAuth0();
  const recipeDetail = {
    ingredients: dish.ingredients,
    name: dish.label,
  };

  const handleSubmit = () => {
    if (isAuthenticated) {
      fetch(`/user/favoriteRecipe/add`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ingredients: recipeDetail,
          sub: user.sub,
          dish: dish,
        }),
      });
    }
  };

  return <button onClick={() => handleSubmit()}>Add</button>;
};
export default AddFavoriteRecipe;
