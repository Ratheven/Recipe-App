import "./css/SearchBar.css";

const SearchBar = ({ search, setSearch, setQuery }) => {
  const handleSubmit = (e) => {
    setSearch(e.target.value);
  };

  const searchResult = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("")
  };

  return (
    <>
      <div className="container-form">
        <form className="search-form" onSubmit={searchResult}>
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={handleSubmit}
          />
          <button className="search-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default SearchBar;
