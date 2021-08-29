import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import tempData from "../TempData.json";
import NoSearchResult from "../image/NoSearchResult.mp4";
import { LargeCardItem } from "../components/Compo_cards";

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

  const [jjal, setJJal] = useState();
  useEffect(() => {
    axios
      .get(
        "https://w.namu.la/s/4705988d97ae7079f94d86fd9059d94310f5c09543b6a2134e9d0d9c842e81f690f5da24ff6c27ee547ef259c219fe4cef3f910329b6ecbdfd5f1ceb10b0cdee1786392fce9a23b31b902a8a1b0729f9bb2b51c778b14306a1be061730b990f7"
      )
      .then((response) => {
        setJJal(response);
      });
  });

  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredDeals = filterDeals(data, searchQuery);

  const lengthAll = filteredDeals.length;
  const lengthSoftName = filteredDeals.length;

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
  const LargeCardMapDiv = styled.div`
    padding-top: 2%;
    padding-bottom: 2%;
  `;

  return (
    <div>
      {lengthAll <= 0 ? (
        <LargeCardMapTable>
          <h2>'{searchQuery}' 검색결과가 없습니다.</h2>
          <video loop={true} muted={true} playsInline={true} autoPlay={true}>
            <source src={NoSearchResult} type="video/mp4" />
            {/* <source src={jjal} type="video/mp4" /> */}
          </video>
        </LargeCardMapTable>
      ) : (
        <LargeCardMapTable>
          <LargeCardMapDiv>
            <h2>'{searchQuery}' 검색결과</h2>
          </LargeCardMapDiv>
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
                게임 ({lengthSoftName})
              </button>
              <button type="button" className="btn btn-dark">
                소프트웨어 ({lengthAll - lengthSoftName})
              </button>
              <button type="button" className="btn btn-dark">
                개발사 ({lengthAll - lengthSoftName})
              </button>
              <button type="button" className="btn btn-dark">
                태그 ({lengthAll - lengthSoftName})
              </button>
            </SearchToolbar>
          </tr>
          <tr>
            {filteredDeals.map((deal) => {
              return (
                <LargeCardMapDiv>
                  <LargeCardItem
                    key={deal.id}
                    Picture={deal.Picture}
                    DevName={deal.DevName}
                    SoftName={deal.SoftName}
                    BeforeCost={deal.BeforeCost}
                    AfterCost={deal.AfterCost}
                    DisRate={deal.DisRate}
                    Platform={deal.Platform}
                  />
                </LargeCardMapDiv>
              );
            })}
          </tr>
        </LargeCardMapTable>
      )}
    </div>
  );
};

export default SearchPage;
