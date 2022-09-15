import "./css/SearchBar.css";

const SearchBar = ({ search, setSearch, setQuery }) => {
  const handleSubmit = (e) => {
    setSearch(e.target.value);
  };

  const searchResult = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <>
      <form action="" class="search-bar" onSubmit={searchResult}>
        <input
          type="search"
          name="search"
          pattern=".*\S.*"
          value={search}
          onChange={handleSubmit}
          required
          className="search-input"
        />
        <button class="search-btn" type="submit">
          <span>Search</span>
        </button>
      </form>
    </>
  );
};
export default SearchBar;
