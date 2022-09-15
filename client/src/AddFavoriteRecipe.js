import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import "./css/AddFavoriteRecipe.css";
import { AiOutlineCheck } from "react-icons/ai";

const AddFavoriteRecipe = ({ dish }) => {
  const { isAuthenticated, user } = useAuth0();
  const recipeDetail = {
    ingredients: dish.ingredients,
    name: dish.label,
  };
  const [isActive, setIsActive] = useState(false);

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
    setIsActive((current) => !current);
    setTimeout(() => {
      setIsActive(false);
    }, "2000");
  };

  return (
    <button
      className={isActive ? "button-dish" : "active"}
      id="btn"
      onClick={() => handleSubmit()}
    >
      {isActive ? <AiOutlineCheck /> : " Add"}
    </button>
  );
};
export default AddFavoriteRecipe;
