import React, { useEffect, useState } from "react";
import Axios from "axios";


function App() {
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    getRecipes();  
  }, []);

   const getRecipes = async (res) => {
    fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data,"hello")
        setRecipe(data);
      });


  };
  return (
    <div>
      <h1>wassasassup</h1>
    </div>
  );
}

export default App;
