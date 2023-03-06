const Search = ({ query, onChangeQuery }) => {
  return (
    <form className="search-form">
      <input
        type="text"
        placeholder="Spider man miles morales"
        value={query}
        onChange={(e) => onChangeQuery(e)}
        className="form-input"
      />
    </form>
  );
};

export default Search;
