import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import SearchBar from "./SearchBar";

const App = () => {
  const [recipes, setRecipes] = useState();
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async (res) => {
    fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.hits, "hello");
        setRecipes(data.hits);
        setStatus("loading");
      });
  };
  return (
    <div>
      <SearchBar />
      {status === "loading" &&
        recipes.map((recipe) => {
          return <Recipe recipe={recipe} status={status}/>;
        })}
      <Recipe />
      <h1>wassasassup</h1>
    </div>
  );
};

export default App;
