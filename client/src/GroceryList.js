import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import List from "./List";
import "./css/GroceryList.css";

const GroceryList = () => {
  const [list, setlist] = useState([]);
  const [inputData, setInputData] = useState("");
  const { user } = useAuth0();
const handleSubmit = (e) => {
    e.preventDefault();
    const newList = [...list, { title: inputData }];
    setlist(newList);
    setInputData("");
    console.log(list, "listlist");
  };

  return (
    <div className="Wrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputData}
          onChange={(e) => {
            setInputData(e.target.value);
          }}
        ></input>
        <button type="submit">submit</button>
      </form>
      {list.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.title}</p>
          </div>
        );
      })}
      <List />
    </div>
  );
};
export default GroceryList;
