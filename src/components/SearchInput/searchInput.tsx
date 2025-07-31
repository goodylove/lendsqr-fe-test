import "./searchInput.modules.scss";
const SearchInput = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for anything"
      />
      <button className="search-button">
        <img src="/svg/search.svg" alt="search icon" />
      </button>
    </div>
  );
};

export default SearchInput;
