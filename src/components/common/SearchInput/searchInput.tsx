import React from "react";
import "./searchInput.modules.scss";
import { useNavigate } from "react-router-dom";
const SearchInput = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  const navigate = useNavigate();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    navigate(`/dashboard/users?search=${encodeURIComponent(searchTerm)}`);
    setSearchTerm("");
  }

  return (
    <form className="search-container" onSubmit={handleSearch}>
      <input
        type="text"
        className="search-input"
        placeholder="Search for anything"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-button" type="submit">
        <img src="/svg/search.svg" alt="search icon" />
      </button>
    </form>
  );
};

export default SearchInput;
