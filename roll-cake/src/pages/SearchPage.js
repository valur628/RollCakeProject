import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Hotdeals from "../components/Hotdeals";
import tempData from "../TempData.json";

import { LargeCardItem } from "../components/Compo_cards";
import { MediumCardItem } from "../components/Compo_cards";

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
  const [fillterdDeal, setData] = useState([]);

  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredDeals = filterDeals(fillterdDeal, searchQuery);
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

  const MediumCardMapTable = styled.table`
    margin-left: auto;
    margin-right: auto;
  `;
  const MediumCardHeaderTd = styled.td`
    padding-top: 5%;
    font-family: "BusanBada";
    vertical-align: center;
    text-align: center;
    font-size: 140%;
    padding-bottom: 0.5%;
  `;
  const MediumCardMapDiv = styled.div`
    padding-bottom: 4%;
  `;
  const MediumCardMapMiddleTd = styled.td`
    width: 5%;
    text-align: center;
  `;

  return (
    <div>
      <h1>SearchPage</h1>
      <Hotdeals hotdeals={filteredDeals} />
      <div>
        <MediumCardMapTable>
          <tr>
            <MediumCardHeaderTd>인기 순 핫딜</MediumCardHeaderTd>
            <MediumCardMapMiddleTd></MediumCardMapMiddleTd>
            <MediumCardHeaderTd>가격 순 핫딜</MediumCardHeaderTd>
          </tr>
          <tr>
            <td>
              {fillterdDeal.slice(0, 10).map((deal) => {
                return (
                  <MediumCardMapDiv>
                    <MediumCardItem
                      key={deal.id}
                      Picture={deal.Picture}
                      DevName={deal.DevName}
                      SoftName={deal.SoftName}
                      BeforeCost={deal.BeforeCost}
                      AfterCost={deal.AfterCost}
                      DisRate={deal.DisRate}
                      Platform={deal.Platform}
                    ></MediumCardItem>
                  </MediumCardMapDiv>
                );
              })}
            </td>
            <MediumCardMapMiddleTd></MediumCardMapMiddleTd>
            <td>
              {fillterdDeal.slice(0, 10).map((deal) => {
                return (
                  <MediumCardMapDiv>
                    <MediumCardItem
                      key={deal.id}
                      Picture={deal.Picture}
                      DevName={deal.DevName}
                      SoftName={deal.SoftName}
                      BeforeCost={deal.BeforeCost}
                      AfterCost={deal.AfterCost}
                      DisRate={deal.DisRate}
                      Platform={deal.Platform}
                    ></MediumCardItem>
                  </MediumCardMapDiv>
                );
              })}
            </td>
          </tr>
        </MediumCardMapTable>
      </div>
    </div>
  );
};

export default SearchPage;
