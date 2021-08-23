import React, { useEffect, useState } from "react";
import tempData from "../TempData.json";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
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
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
