import React, { useEffect, useState } from "react";
import Hotdeals from "../components/Hotdeals";
import tempData from "../TempData.json";
import axios from "axios";

const SearchPage = () => {
  const [data, setData] = useState([]);

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
      <Hotdeals hotdeals={data} />
    </div>
  );
};

export default SearchPage;
