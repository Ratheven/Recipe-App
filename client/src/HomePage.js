import { useEffect, useState } from "react";
import Header from "./Header";
import Recipe from "./Recipe";
import { useAuth0 } from "@auth0/auth0-react";
import SearchBar from "./SearchBar";

import "./css/Homepage.css";

const HomePage = () => {
  //stores data from the api
  const [recipes, setRecipes] = useState();
  //use idle to wait and loading to go
  const [status, setStatus] = useState("idle");
  //stores data that is entered in the input
  const [search, setSearch] = useState("");
  //set the state as beef
  const [query, setQuery] = useState("beef");
  const { isAuthenticated, user } = useAuth0();
  //everytime the query changes it calls getRecipe function
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    try {
      // using the state beef and the .env code to retrieve the data from Edamam
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`
      );
      const result = await response.json();
      //stores data from the api
      setRecipes(result.hits);
      //loading to go
      setStatus("loading");
    } catch (err) {
      console.log(err);
    }
  };

  //Post a new user//
  useEffect(() => {
    // if there is a user and is authenticated, add user to our database
    if (isAuthenticated) {
      fetch(`/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // grab user from Auth0
          user,
        }),
      });
    }
  }, [isAuthenticated]);
  //isAutnticated
  return (
    <>

      <Header  />
      <SearchBar search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className="gridContainer">
        {status === "loading" &&
          recipes.map((recipe, index) => {
            return (
              <div className="grid">
                <Recipe key={index} recipe={recipe} status={status} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default HomePage;
