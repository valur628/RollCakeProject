import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tempData from "../TempData.json";

import { LargeCardItem, MediumCardItem } from "../components/Compo_cards";

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

  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredDeals = filterDeals(data, searchQuery);
  console.log(filteredDeals);

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
      {/* <h1>SearchPage</h1> */}
      {/* <Hotdeals hotdeals={filteredDeals} /> */}
      <div>
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
                전체 ({filteredDeals.length})
              </button>
              <button type="button" className="btn btn-dark">
                게임 ({filteredDeals.length})
              </button>
              <button type="button" className="btn btn-dark">
                소프트웨어 ({filteredDeals.length})
              </button>
              <button type="button" className="btn btn-dark">
                개발사 ({filteredDeals.length})
              </button>
              <button type="button" className="btn btn-dark">
                태그 ({filteredDeals.length})
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
      </div>
    </div>
  );
};

export default SearchPage;
