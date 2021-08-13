import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const emptyQuery = "";

  const [searchDeals, setSearchDeals] = useState({
    filteredDeal: [],
    query: emptyQuery,
  });

  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="핫딜 검색"
        aria-label="Search"
        name="s"
        onChange={(e) => {
          setSearchDeals(e.target.value);
        }}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );

  const handleInputChange = (event) => {
    // const query = event.target.value;
    // const { data } = props;
    // const posts = data.allMarkdownRemark.edges || [];
    // const filteredData = posts.filter((post) => {
    //   const { description, title, tags } = post.node.frontmatter;
    //   return (
    //     (description &&
    //       description.toLowerCase().includes(query.toLowerCase())) ||
    //     (title && title.toLowerCase().includes(query.toLowerCase())) ||
    //     (tags && tags.join("").toLowerCase().includes(query))
    //   );
    // });
    // return (
    //   <form className="d-flex">
    //     <input
    //       className="form-control me-2"
    //       type="search"
    //       placeholder="핫딜 검색"
    //       aria-label="Search"
    //       name="s"
    //       onChange={(e) => {
    //         setSearchDeals(e.target.value);
    //       }}
    //     />
    //     <button className="btn btn-outline-success" type="submit">
    //       Search
    //     </button>
    //   </form>
    // );
  };
};

export default SearchBar;
