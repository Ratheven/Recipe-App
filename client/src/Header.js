import "./Header.css"
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import SearchBar from "./SearchBar";


const Header = ({ search, setSearch, setQuery })=> {
    return(
        <div className="container">
            <SearchBar search={search} setSearch={setSearch} setQuery={setQuery}/>
            <LoginButton/>
            <LogoutButton/>
        </div>
    )
}
export default Header