// DBresult.json을 임시데이터로 사용함

import React from "react";
import styled from "styled-components";
import { LargeCardItem } from "../components/Compo_cards";

const LargeCardMapDiv = styled.div`
  padding-top: 2%;
  padding-bottom: 2%;
`;

function compareNumbers(a, b) {
  return a - b;
}

const Hotdeals = ({ hotdeals, order = "na" }) => {
  // order 파라미터를 만듦
  // HotdealPage, SearchPage에서 파라미터를 받아 카드 정렬 방법 변경
  // 최신순: latest, 인기순: popularity , 이름순: name , 가격순: price, 할인율 순: disRate
  // default: name

  switch (order) {
    case "latest":
      // id로 정렬 id는 데이터가 서버에 저장된 시간
      console.log("order: ", order);
      hotdeals.ScrapingDB.sort(
        () =>
          function (a, b) {
            var nameA = a.id.toUpperCase(); // ignore upper and lowercase
            var nameB = b.id.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            // 이름이 같을 경우
            return 0;
          }
      );
      break;
    case "popularity":
      console.log("order: ", order);
      // 아직 개발안됨
      break;
    case "name":
      // software의 이름 순으로 정렬
      console.log("order: ", order);
      hotdeals.ScrapingDB.sort(
        () =>
          function (a, b) {
            var nameA = a.SoftName.toUpperCase(); // ignore upper and lowercase
            var nameB = b.SoftName.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            // 이름이 같을 경우
            return 0;
          }
      );
      break;
    case "price":
      console.log("order: ", order);
      hotdeals.ScrapingDB.sort(
        () =>
          function (a, b) {
            return a.DB_DisCost - b.DB_DisCost;
          }
      );
      break;
    case "disRate":
      console.log("order: ", order);
      hotdeals.ScrapingDB.sort(
        () =>
          function (a, b) {
            return a.DB_DisRate - b.DB_DisRate;
          }
      );
      break;
    default:
      console.log("Error: ", order);
      break;
  }

  return (
    <>
      {hotdeals.ScrapingDB.map((deal) => {
        return (
          <LargeCardMapDiv>
            <LargeCardItem
              key={deal.DB_SoftIndex}
              Picture={deal.DB_SmallPicture}
              DevName={deal.DB_DevName}
              SoftName={deal.DB_SoftName}
              BeforeCost={deal.DB_RegCost / 100}
              AfterCost={deal.DB_DisCost / 100}
              DisRate={deal.DB_DisRate / 100}
              Platform={deal.DB_Platform}
              // key={deal.id}
              // Picture={deal.Picture}
              // DevName={deal.DevName}
              // SoftName={deal.SoftName}
              // BeforeCost={deal.BeforeCost}
              // AfterCost={deal.AfterCost}
              // DisRate={deal.DisRate}
              // Platform={deal.Platform}
            />
          </LargeCardMapDiv>
        );
      })}
    </>
  );
};

export default Hotdeals;
