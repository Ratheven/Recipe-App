import "./css/Header.css";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useHistory } from "react-router-dom";

const Header = () => {
  let history = useHistory();
  return (
    <>
      <div className="umber-box">Hello</div>
      <div className="container-header">
        <div onClick={() => history.push("/")} className="container-logo">
          <img src="/asset/logo/FoodIdea.PNG" className="logo" />
        </div>
        <div className="search-headers">
          <LoginButton />
          <LogoutButton />
        </div>
      </div>
      <div className="list">
        <p className="notes-list" onClick={() => history.push("/GroceryList")}>
          Grocery List
        </p>
        <p className="notes-list">Notes</p>
        <p className="notes-list">Schedule</p>
      </div>
    </>
  );
};
export default Header;
