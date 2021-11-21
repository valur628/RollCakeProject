import React, { useEffect, useState } from "react";
import styled from "styled-components";

import db from "../components/firebase.config";
import { onSnapshot, collection } from "firebase/firestore";

import HotdealsL from "../components/Hotdeals";
// import { searchSoft, searchDev } from "../components/Search_module";

const searchGame = (data, query) => {
  if (!query) return [];

  try {
    return data.filter((post) => {
      const softName = post.DB_SoftName.toLowerCase(); // 클래스로 만들 예정
      return softName.includes(query.toLowerCase());
    });
  } catch (e) {
    console.log("Error:", e);
  }
};

const searchDev = (data, query) => {
  if (!query) return [];

  try {
    return data.filter((post) => {
      const softName = post.DB_DevName.toLowerCase(); // 클래스로 만들 예정
      return softName.includes(query.toLowerCase());
    });
  } catch (e) {
    console.log("Error:", e);
  }
};

const SearchPage = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");

  const [searchQuery, setSearchQuery] = useState([]);
  useEffect(() => {
    setSearchQuery(query);
  }, [query]);

  const [data, setData] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, "ScrapingDB"), (snapshot) =>
        setData(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );

  // // 원래 코드
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   setData(tempData.ScrapingDB); // json의 array의 이름 가져옴
  // }, []);

  // // 2;
  // const [data, setData] = useState([]);
  // const fetchData = async () => {

  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   setData(db.getHotdeals()); // json의 array의 이름 가져옴
  // }, []);

  // 검색 페이지 내에서의 정렬에 사용
  // const [searchType, setSearchType] = useState();

  const fillteredGame = searchGame(data, searchQuery);
  const fillteredDev = searchDev(data, searchQuery);
  // const fillteredSoft = searchSoft(data, searchQuery);

  const lengthAll = fillteredGame.length + fillteredDev.length;
  console.log("lengthAll: ", lengthAll);

  if (lengthAll) {
    return (
      // 검색결과가 있으면 실행
      <>
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
                SW ({fillteredGame.length})
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
                {/*소프트웨어 (0)*/}
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
                {/*개발사 ({fillteredDev.length})*/}
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
                {/*태그 (0)*/}
                {/* 태그 ({lengthAll - lengthSoftName}) */}
              </label>
            </SearchToolbar>
          </tr>
          <tr>
            <HotdealsL hotdeals={fillteredGame} order="name" />
            {/* <HotdealsL hotdeals={fillteredDev} order="name" /> */}
          </tr>
        </LargeCardMapTable>
      </>
    );
  } else {
    return (
      // 검색결과가 없으면 실행
      <NoSearchResult>
        <SearcQueryH2>'{searchQuery}' 검색결과가 없습니다.</SearcQueryH2>
      </NoSearchResult>
    );
  }
};

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
const NoSearchResult = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 100vh;
`;

export default SearchPage;
