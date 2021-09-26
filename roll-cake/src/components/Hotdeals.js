import React from "react";
import styled from "styled-components";
import { LargeCardItem } from "../components/Compo_cards";

const LargeCardMapDiv = styled.div`
  padding-top: 2%;
  padding-bottom: 2%;
`;

const Hotdeals = ({ hotdeals, order = "latest" }) => {
  // order 파라미터를 만듦
  // HotdealPage, SearchPage에서 파라미터를 받아 카드 정렬 방법 변경
  // 최신순: latest, 인기순: popularity , 이름순: name , 가격순: price, 할인율 순: disRate
  // default: name

  switch (order) {
    case "latest":
      console.log("order: ", order);
      break;
    case "popularity":
      console.log("order: ", order);
      break;
    case "name":
      console.log("order: ", order);
      break;
    case "price":
      console.log("order: ", order);
      break;
    case "disRate":
      console.log("order: ", order);
      break;
    default:
      console.log("Error: ", order);
      break;
  }

  return (
    <>
      {hotdeals.map((deal) => {
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
    </>
  );
};

export default Hotdeals;
