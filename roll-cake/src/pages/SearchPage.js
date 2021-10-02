import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import tempData from "../DBresult.json";
import NoSearchResult from "../image/NoSearchResult.mp4";
import Hotdeals from "../components/Hotdeals";
// import { searchSoft, searchDev } from "../components/Search_module";

const SearchPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(tempData.ScrapingDB); // json의 array의 이름 가져옴
    // axios의 문제로 임시데이터로 대체함. 깃허브의 접속권한 가져올 수 없음

    //   axios
    //     .get(
    //       "https://github.com/wncjf2000/RollCakeProject/blob/main/roll-cake/src/TempData.json"
    //     )
    //     .then((response) => {
    //       setData(response.data); // 코드의 핵심
    //       console.log(response.data);
    //     });
  }, []);

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

  // 검색 페이지 내에서의 정렬에 사용
  // const [searchType, setSearchType] = useState();

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

  const searchGame = (data, query) => {
    if (!query) {
      return data;
    }

    try {
      return data.filter((post) => {
        const softName = post.DB_SoftName.toLowerCase(); // 클래스로 만들 예정
        return softName.includes(query);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const searchDev = (data, query) => {
    if (!query) {
      return data;
    }

    try {
      return data.filter((post) => {
        const softName = post.DB_DevName.toLowerCase(); // 클래스로 만들 예정
        return softName.includes(query);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");

  const fillteredGame = searchGame(data, searchQuery);
  const fillteredDev = searchDev(data, searchQuery);
  // const fillteredSoft = searchSoft(data, searchQuery);
  console.log("fillterdGame", fillteredGame);

  const lengthAll = fillteredGame.length + fillteredDev.length;
  console.log("legth", lengthAll);

  return (
    <div>
      {lengthAll > 0 ? (
        // 검색결과가 있으면 실행
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
              <label type="button" className="btn btn-dark">
                <input
                  type="radio"
                  class="btn-check"
                  name="options"
                  id="option1"
                  autocomplete="off"
                  // checked={this.state.selectedOption === "all"}
                  // onChange={() => setSearchType(1)}
                />
                전체 ({lengthAll})
              </label>

              <label type="button" className="btn btn-dark">
                <input
                  type="radio"
                  class="btn-check"
                  name="options"
                  id="option2"
                  autocomplete="off"
                  // checked={this.state.selectedOption === "게임"}
                  // onChange={this.onValueChange}
                />
                게임 ({fillteredGame.length})
              </label>

              <label type="button" className="btn btn-dark">
                <input
                  type="radio"
                  class="btn-check"
                  name="options"
                  id="option3"
                  autocomplete="off"
                  // checked={this.state.selectedOption === "소프트웨어"}
                  // onChange={this.onValueChange}
                />
                소프트웨어 (0)
                {/* 소프트웨어 ({lengthSoftName}) */}
              </label>

              <label type="button" className="btn btn-dark">
                <input
                  type="radio"
                  class="btn-check"
                  name="options"
                  id="option4"
                  autocomplete="off"
                  // checked={this.state.selectedOption === "개발사"}
                  // onChange={this.onValueChange}
                />
                개발사 ({fillteredDev.length})
              </label>

              <label type="button" className="btn btn-dark">
                <input
                  type="radio"
                  class="btn-check"
                  name="options"
                  id="option5"
                  autocomplete="off"
                  // checked={this.state.selectedOption === "태그"}
                  // onChange={this.onValueChange}
                />
                태그 (0)
                {/* 태그 ({lengthAll - lengthSoftName}) */}
              </label>
            </SearchToolbar>
          </tr>
          <tr>
            <Hotdeals hotdeals={fillteredGame} />
            <Hotdeals hotdeals={fillteredDev} />
          </tr>
        </LargeCardMapTable>
      ) : (
        // 검색결과가 없으면 실행
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
      )}
    </div>
  );
};

export default SearchPage;
