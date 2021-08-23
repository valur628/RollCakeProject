import React, { useEffect, useState } from "react";
import Hotdeals from "../components/Hotdeals";
import tempData from "../TempData.json";
import NavSearchBar from "../components/Nav_SearchBar";
// import tempData from "../TempData.json";
// import axios from "axios";

const filterDeals = (data, searchDeals) => {
  if (!searchDeals) {
    return data;
  }

  console.log("filterDeals", data, searchDeals);

  return data.filter((post) => {
    const postName = post.SoftName.toLowerCase();
    return postName.includes(searchDeals);
  });
};

const SearchPage = () => {
  const [data, setData] = useState([]);

  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredDeals = filterDeals(tempData, searchQuery);
  console.log(filteredDeals);

  useEffect(() => {
    //   axios
    //     .get(
    //       "https://github.com/wncjf2000/RollCakeProject/blob/main/roll-cake/src/TempData.json"
    //     )
    //     .then((response) => {
    //       setData(response.data); // 코드의 핵심
    //       console.log(response.data);
    //     });
    setData(tempData); // 코드의 핵심
    // axios의 문제로 임시데이터로 대체함. 깃허브의 접속권한 가져올 수 없음
  }, []);

  return (
    <div>
      <h1>SearchPage</h1>
      <Hotdeals hotdeals={filteredDeals} />
    </div>
  );
};

export default SearchPage;
