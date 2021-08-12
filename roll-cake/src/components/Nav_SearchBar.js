import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const [searchDeals, setSearchDeals] = useState([]);

  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(event) => {
          setSearchDeals(event.target.value);
        }}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
      {/* <div className="dataResult">
        {DealData.map((value, key) => {
          return (
            <Link
              className="nav-link"
              activeClassName="active"
              aria-current="page"
              to="/Search"
            ></Link>
          );
        })}
      </div> */}
    </form>
  );
};

export default SearchBar;
