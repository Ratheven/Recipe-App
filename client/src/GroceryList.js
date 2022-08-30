import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const GroceryList = () => {
  const [list, setlist] = useState([]);
  const [inputData, setInputData] = useState("");

  const { user  } = useAuth0();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = [...list, { title: inputData }];
    setlist(newList);
    setInputData("");
    console.log(list, "listlist");
  };

  const getAllIngredients = async ()=> {
      const response = await fetch(`/ingredients/${user.sub}`)
      const result = await response.json()
  }
  useEffect(()=> {
    getAllIngredients()
  },[])
  return (
    <div>
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
        console.log(item, "plplplpl");
        return (
          <div key={index}>
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};
export default GroceryList;
