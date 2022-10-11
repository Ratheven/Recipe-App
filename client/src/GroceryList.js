import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import List from "./List";
import "./css/GroceryList.css";
import { AiOutlinePlus } from "react-icons/ai";

const GroceryList = () => {
  //empty Array until
  const [list, setlist] = useState([]);
  //input to store ingredient
  const [inputData, setInputData] = useState("");

  const handleSubmit = (e) => {
    //prevent the page from rerendering
    e.preventDefault();
    //spread the list and add the new value
    const newList = [...list, { title: inputData }];
    //set it as the new list
    setlist(newList);
    //reset the input
    setInputData("");
  };

  return (
    <div className="Gorcery-Wrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputData}
          onChange={(e) => {
            setInputData(e.target.value);
          }}
          className="grocery-input"
        ></input>
        <button type="submit">
          <AiOutlinePlus />
        </button>
      </form>
      {/* map through the list */}
      {list.map((item, index) => {
        return (
          <div key={index}>
            <p className="list-title">{item.title}</p>
          </div>
        );
      })}
      {/* display user favourite grocery List */}
      <List />
    </div>
  );
};
export default GroceryList;
