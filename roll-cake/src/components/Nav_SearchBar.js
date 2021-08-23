import React from "react";
import { useHistory } from "react-router-dom";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const history = useHistory();
  const onSubmit = (e) => {
    history.push(`?s=${searchQuery}`);
    e.preventDefault();
  };

  return (
    <form className="d-flex">
      <input
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.target.value)}
        className="form-control me-2"
        type="search"
        placeholder="핫딜 검색"
        aria-label="Search"
        name="s"
      />
      <button
        className="btn btn-outline-success"
        type="submit"
        onClick={() => history.push("/Search")}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
