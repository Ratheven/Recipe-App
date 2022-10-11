import { useAuth0 } from "@auth0/auth0-react";
import {  useState } from "react";
import "./css/AddFavoriteRecipe.css";
import { AiOutlineCheck } from "react-icons/ai";

const AddFavoriteRecipe = ({ dish }) => {
  //Check if the user is authenticated, the user data
  const { isAuthenticated, user } = useAuth0();
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
          sub: user.sub,
          dish: dish,
          
        }),
      });
    }
    //change the current state to the opposite value
    setIsActive((current) => !current);
    //in 2 seconds change the setIsActive to false 
    setTimeout(() => {
      setIsActive(false);
    }, "2000");
  };

  return (
    //changes the css for the button depending on the boolean of the state
    <button
      className={isActive ? "button-dish" : "active"}
      id="btn"
      //call handleSubmit once button is click
      onClick={() => handleSubmit()}
    >
      {/* display AiOutlineCheck if isActive is true */}
      {isActive ? <AiOutlineCheck /> : " Add"}
    </button>
  );
};
export default AddFavoriteRecipe;
