import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./css/List.css"

const List = () => {
  const [wishList, setwishList] = useState();
  const [status, setStatus] = useState("idle");
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {

    handleList();
  }, [isAuthenticated]);

  const handleList = async () => {
    try {
 
      const response = await fetch(`/ingredients/${user.sub}`);
    //   console.log(response, "gioigo");
      const result = await response.json();
      console.log(result, "klkl");
      setwishList(result.data.list);
      setStatus("loading");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {status === "loading" &&
        wishList.map((item) => {
            console.log(item.ingredients)
          return (
            <div className="list-wrapper">
            <h1 className="list-label">{item.label}</h1>
           {item.ingredients.map((element)=> {
            // console.log(element, "asgh")
            return(
                <p>{element.text}</p>
            )
           })}
            </div>
          )
        })}
    </>
  );
};
export default List;
