import "./css/Header.css";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useHistory } from "react-router-dom";

const Header = ({ search, setSearch, setQuery }) => {
  let history = useHistory();
  return (
    <>
      <div className="umber-box">Hello</div>
      <div className="container-header">
        <div onClick={() => history.push("/")}>Logo</div>
        <div className="search-headers">
          <LoginButton />
          <LogoutButton />
        </div>
      </div>
      <div className="list">
        <p className="notes-list" onClick={() => history.push("/GroceryList")}>Grocery List</p>
        <p className="notes-list">notes</p>
        <p className="notes-list">schedule</p>
      </div>
    </>
  );
};
export default Header;
