const Recipe = ({recipe, status}) => {
  if(status){
    const dish = recipe.recipe
   
  

   
    // console.log(Math.round(recipe.recipe.calories))
    return (
      <div>
      <h1>{dish.label}</h1>
      <p>{dish.calories}</p>
      <img src={dish.image} alt=""/>
    </div>
  );
}
};
export default Recipe;
