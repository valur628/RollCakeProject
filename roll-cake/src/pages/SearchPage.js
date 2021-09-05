import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import tempData from "../TempData.json";
import NoSearchResult from "../image/NoSearchResult.mp4";
import Hotdeals from "../components/Hotdeals";

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
    setData(tempData); // axios의 문제로 임시데이터로 대체함. 깃허브의 접속권한 가져올 수 없음
  }, []);

  const filterDeals = (data, query) => {
    if (!query) {
      return data;
    }

    // query = query.toLowerCase();

    try {
      return data.filter((post) => {
        const softName = post.SoftName.toLowerCase();
        const devName = post.DevName.toLowerCase();
        // return softName.includes(query);

        const softdev = [softName, devName];

        return softdev.includes(query);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const [jjal, setJJal] = useState();
  useEffect(() => {
    axios
      .get(
        "https://namu.wiki/w/%ED%8C%8C%EC%9D%BC%3A%EB%82%B4%EA%B0%80%20%EA%B3%A0%EC%9E%90%EB%9D%BC%EB%8B%88.gif"
      )
      .then((response) => {
        setJJal(response);
      });
  });

  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");

  const filteredDeals = filterDeals(data, searchQuery);
  const fSoft = filteredDeals.soft;
  const fDev = filteredDeals.dev;
  console.log(filteredDeals);
  // const lengthAll = fSoft.length + fDev.length;
  const lengthAll = 1;

  const LargeCardMapTable = styled.table`
    margin-left: auto;
    margin-right: auto;
    vertical-align: middle;
  `;
  const SearchToolbar = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 100%;
    max-width: 1200px;
    max-height: 170px;
    vertical-align: middle;
    text-align: center;
  `;
  const SearcQueryH2 = styled.h2`
    padding-top: 2%;
    padding-bottom: 2%;
  `;

  return (
    <div>
      {lengthAll <= 0 ? (
        // 검색결과가 0과 같거나 적을때 실행
        <LargeCardMapTable>
          <tr>
            <SearcQueryH2>'{searchQuery}' 검색결과가 없습니다.</SearcQueryH2>
          </tr>
          <tr>
            <video loop={true} muted={true} playsInline={true} autoPlay={true}>
              <source src={NoSearchResult} type="video/mp4" />
            </video>
          </tr>
        </LargeCardMapTable>
      ) : (
        // 검색결과가 0보다 많을때 실행
        <LargeCardMapTable>
          <tr>
            <SearcQueryH2>'{searchQuery}' 검색결과</SearcQueryH2>
          </tr>
          <tr>
            <SearchToolbar
              className="btn-group btn-group-lg btn-group-custom"
              role="group"
              aria-label="toolbar"
            >
              <button type="button" className="btn btn-dark">
                전체 ({lengthAll})
              </button>
              <button type="button" className="btn btn-dark">
                {/* 게임 ({fSoft.length}) */}
              </button>
              <button type="button" className="btn btn-dark">
                소프트웨어 (0)
                {/* 소프트웨어 ({lengthSoftName}) */}
              </button>
              <button type="button" className="btn btn-dark">
                {/* 개발사 ({fDev.length}) */}
              </button>
              <button type="button" className="btn btn-dark">
                태그 (0)
                {/* 태그 ({lengthAll - lengthSoftName}) */}
              </button>
            </SearchToolbar>
          </tr>
          <tr>
            <Hotdeals hotdeals={filteredDeals} />
          </tr>
        </LargeCardMapTable>
      )}
    </div>
  );
};

export default SearchPage;
