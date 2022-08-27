import { useEffect, useState } from "react";
import Header from "./Header";
import Recipe from "./Recipe";
import { useAuth0 } from "@auth0/auth0-react";


const HomePage = () => {
    const [recipes, setRecipes] = useState();
    const [status, setStatus] = useState("idle");
    const [search, setSearch]= useState('')
    const [query,setQuery]= useState()
    const { isAuthenticated, user } = useAuth0();

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

        //Post a new user//
  useEffect(() => {
    if (isAuthenticated) {
      fetch(`/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          user,
        }),
      });
    }
  }, [isAuthenticated]);
  //isAutnticated
      return (
        <div>
            <Header search={search} setSearch={setSearch} setQuery={setQuery}/>
          {status === "loading" &&
            recipes.map((recipe, index) => {
              return <Recipe key={index} recipe={recipe} status={status} />;
            })}
          <Recipe />
        </div>
      );
}
export default HomePage