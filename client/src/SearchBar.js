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
      <div className="search-box">
        <form className="search" onSubmit={searchResult}>
          <input
            className="input-search"
            type="text"
            value={search}
            onChange={handleSubmit}
          />
          <button className="btn-search" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default SearchBar;
