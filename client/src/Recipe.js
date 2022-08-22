const Recipe = ({recipe, status}) => {
  if(status){

    // console.log("helllllllll",recipe.recipe.calories)
    console.log(Math.round(recipe.recipe.calories))
  }
  return (
    <div>
      <h1></h1>
      <p>Calories</p>
      <img src="" alt=""></img>
    </div>
  );
};
export default Recipe;
