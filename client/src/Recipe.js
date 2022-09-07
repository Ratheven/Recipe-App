import React, { useEffect, useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import AddFavoriteRecipe from "./AddFavoriteRecipe";
import "./css/Recipe.css";

const Recipe = ({ recipe, status }) => {
  const [show, setShow] = useState(false);

  if (status) {
    const dish = recipe.recipe;

    // console.log(Math.round(recipe.recipe.calories))
    return (
      <div className="recipeContainer">
        <h1>{dish.label}</h1>

        <img src={dish.image} alt="" />
        <div>
          <button onClick={() => setShow(true)}>Ingredients</button>
          <AddFavoriteRecipe dish={dish} />
        </div>
        <Dialog open={show}>
          <DialogTitle className="title">Ingredients</DialogTitle>
          <DialogContent>
            <table>
              <thead>
                <th>Ingredients</th>
                <th>weight</th>
              </thead>
              <tbody>
                {dish.ingredients.map((ingredient) => {
                  return (
                    <tr>
                      <td>{ingredient.text}</td>
                      <td>{Math.round(ingredient.weight)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </DialogContent>
          <DialogActions>
            <button onClick={() => setShow(false)}>Close</button>
            <button onClick={() => window.open(dish.url)} autoFocus>
              See More
            </button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
};
export default Recipe;
