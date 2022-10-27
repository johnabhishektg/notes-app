const Search = ({ handleSearchField }) => {
  return (
    <div className="search">
      <i class="fas fa-search search-ico"></i>
      <input
        type="text"
        name="search-bar"
        className="search-bar"
        placeholder="type to search..."
        onChange={(e) => handleSearchField(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default Search;
