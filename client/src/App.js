import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import SearchBar from "./SearchBar";

const App = () => {
  const [recipes, setRecipes] = useState();
  const [status, setStatus] = useState("idle");
  const [search, setSearch]= useState('')
  const [query,setQuery]= useState()

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    try{

      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`
      );
      const result = await response.json();
      setRecipes(result.hits);
      setStatus("loading")
      console.log(result.hits)
    } catch (err){
      console.log(err)
    }
  };
  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} setQuery={setQuery}/>
      {status === "loading" &&
        recipes.map((recipe, index) => {
          return <Recipe key={index} recipe={recipe} status={status} />;
        })}
      <Recipe />

   
    </div>
  );
};

export default App;
