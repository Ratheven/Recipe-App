import React, { useEffect, useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from '@mui/material/DialogActions';
import ShoppingList from "./ShoppingList";

const Recipe = ({ recipe, status }) => {
  const [show, setShow] = useState(false);



  if (status) {
    const dish = recipe.recipe;
    console.log(dish,"hell")
    // console.log(Math.round(recipe.recipe.calories))
    return (
      <>
        <Dialog open={show}>
          <DialogTitle>Ingredients</DialogTitle>
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
          <button onClick={()=> setShow(false)}>Close</button>
          <button onClick={()=> window.open(dish.url)} autoFocus>
            See More
          </button>
        </DialogActions>
        </Dialog>
        <div>
          <h1>{dish.label}</h1>
     
          <img src={dish.image} alt="" />
          <button onClick={() => setShow(true)}>Ingredients</button>
          <ShoppingList dish={dish}/>
        </div>
      </>
    );
  }
};
export default Recipe;
