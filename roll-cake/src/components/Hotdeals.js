import React from "react";
import styled from "styled-components";
import {
  LargeCardItem,
  MediumCardItem,
  SmallCardItem,
} from "../components/Compo_cards";

const CardMapDiv = styled.div`
  padding-top: 2%;
  padding-bottom: 2%;
`;

const HotdealsS = ({ hotdeals, num = 10 }) => {
  // MainPage의 최신순 핫딜
  // SmallCard 사용
  hotdeals.sort(function (a, b) {
    var nameA = a.DB_UpdateTime.toUpperCase(); // ignore upper and lowercase
    var nameB = b.DB_UpdateTime.toUpperCase(); // ignore upper and lowercase

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    // 이름이 같을 경우
    return 0;
  });

  // slice()로 10개만 불러옴
  return (
    <>
      {hotdeals.slice(num - 10, num).map((deal) => {
        return (
          <CardMapDiv>
            <SmallCardItem
              key={deal.DB_SoftIndex}
              SoftName={deal.DB_SoftName}
              BeforeCost={deal.DB_RegCost}
              AfterCost={deal.DB_DisCost}
              Currency={deal.DB_Currency}
              Platform={deal.DB_Platform}
              Address={deal.DB_ProductAddress}
            />
          </CardMapDiv>
        );
      })}
    </>
  );
};

export { HotdealsS };

const HotdealsM = ({ hotdeals, order = "LowPrice" }) => {
  // 메인페이지의 인기 순, 가격 순 핫딜 정보
  // 메인페이지에서 order 파라미터 받아옴
  // 인기 순: popularity, 가격 순: price
  switch (order) {
    case "HighDisRate":
      // console.log("order: ", order);
      hotdeals.sort(function (a, b) {
        return b.DB_DisRate - a.DB_DisRate; // 내림차순
      });
      // 아직 개발안됨
      break;
    case "LowPrice":
      // console.log("order: ", order);
      hotdeals.sort(function (a, b) {
        return a.DB_DisCost - b.DB_DisCost; // 오름차순
      });
      break;
    default:
      console.log("order Error: ", order);
      break;
  }

  return (
    <>
      {hotdeals.slice(0, 10).map((deal) => {
        return (
          <CardMapDiv>
            <MediumCardItem
              key={deal.DB_SoftIndex}
              Picture={deal.DB_SmallPicture}
              DevName={deal.DB_DevName}
              SoftName={deal.DB_SoftName}
              BeforeCost={deal.DB_RegCost}
              AfterCost={deal.DB_DisCost}
              Currency={deal.DB_Currency}
              DisRate={deal.DB_DisRate}
              Platform={deal.DB_Platform}
              Address={deal.DB_ProductAddress}
            />
          </CardMapDiv>
        );
      })}
    </>
  );
};

export { HotdealsM };

const HotdealsL = ({ hotdeals, order = "name" }) => {
  // HotdealPage, SearchPage에서 파라미터를 받아 카드 정렬 방법 변경
  // 최신순: latest, 인기순: popularity , 이름순: name , 가격순: price, 할인율 순: disRate
  // default: name
  switch (order) {
    case "latest":
      // id로 정렬 id는 데이터가 서버에 저장된 시간
      console.log("order: ", order);
      hotdeals.sort(function (a, b) {
        var nameA = a.DB_UpdateTime.toUpperCase(); // ignore upper and lowercase
        var nameB = b.DB_UpdateTime.toUpperCase(); // ignore upper and lowercase

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        // 이름이 같을 경우
        return 0;
      });
      break;
    case "name":
      // software의 이름 순으로 정렬
      console.log("order: ", order);
      hotdeals.sort(function (a, b) {
        var nameA = a.DB_SoftName.toUpperCase(); // ignore upper and lowercase
        var nameB = b.DB_SoftName.toUpperCase(); // ignore upper and lowercase

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        // 이름이 같을 경우
        return 0;
      });
      break;
    case "HighPrice":
      console.log("order: ", order);
      hotdeals.sort(function (a, b) {
        return b.DB_DisCost - a.DB_DisCost; // 오름차순
      });
      break;
    case "LowPrice":
      console.log("order: ", order);
      hotdeals.sort(function (a, b) {
        return a.DB_DisCost - b.DB_DisCost; // 오름차순
      });
      break;
    case "HighDisRate":
      console.log("order: ", order);
      hotdeals.sort(function (a, b) {
        return b.DB_DisRate - a.DB_DisRate; // 내림차순
      });
      break;
    case "LowDisRate":
      console.log("order: ", order);
      hotdeals.sort(function (a, b) {
        return a.DB_DisRate - b.DB_DisRate; // 내림차순
      });
      break;
    default:
      console.log("order Error: ", order);
      break;
  }

  return (
    <>
      {hotdeals.map((deal) => {
        return (
          <CardMapDiv>
            <LargeCardItem
              key={deal.DB_SoftIndex}
              Picture={deal.DB_SmallPicture}
              DevName={deal.DB_DevName}
              SoftName={deal.DB_SoftName}
              BeforeCost={deal.DB_RegCost}
              AfterCost={deal.DB_DisCost}
              Currency={deal.DB_Currency}
              DisRate={deal.DB_DisRate}
              Platform={deal.DB_Platform}
              Address={deal.DB_ProductAddress}
            />
          </CardMapDiv>
        );
      })}
    </>
  );
};

export default HotdealsL;

// // DBresult.json을 임시데이터로 사용함

// import React from "react";
// import styled from "styled-components";
// import {
//   LargeCardItem,
//   MediumCardItem,
//   SmallCardItem,
// } from "../components/Compo_cards";

// const CardMapDiv = styled.div`
//   padding-top: 2%;
//   padding-bottom: 2%;
// `;

// const Hotdeals = ({ hotdeals, order = "latest" }) => {
//   // HotdealPage, SearchPage에서 파라미터를 받아 카드 정렬 방법 변경
//   // 최신순: latest, 인기순: popularity , 이름순: name , 가격순: price, 할인율 순: disRate
//   // default: name
//   switch (order) {
//     case "latest":
//       // id로 정렬 id는 데이터가 서버에 저장된 시간
//       console.log("order: ", order);
//       hotdeals.sort(function (a, b) {
//         var nameA = a.DB_UpdateTime.toUpperCase(); // ignore upper and lowercase
//         var nameB = b.DB_UpdateTime.toUpperCase(); // ignore upper and lowercase

//         if (nameA < nameB) return -1;
//         if (nameA > nameB) return 1;
//         // 이름이 같을 경우
//         return 0;
//       });
//       break;
//     case "popularity":
//       console.log("order: ", order);
//       // 아직 개발안됨
//       break;
//     case "name":
//       // software의 이름 순으로 정렬
//       console.log("order: ", order);
//       hotdeals.sort(function (a, b) {
//         var nameA = a.DB_SoftName.toUpperCase(); // ignore upper and lowercase
//         var nameB = b.DB_SoftName.toUpperCase(); // ignore upper and lowercase

//         if (nameA < nameB) return -1;
//         if (nameA > nameB) return 1;
//         // 이름이 같을 경우
//         return 0;
//       });
//       break;
//     case "price":
//       console.log("order: ", order);
//       hotdeals.sort(function (a, b) {
//         return a.DB_DisCost - b.DB_DisCost; // 오름차순
//       });
//       break;
//     case "disRate":
//       console.log("order: ", order);
//       hotdeals.sort(function (a, b) {
//         return b.DB_DisRate - a.DB_DisRate; // 내림차순
//       });
//       break;
//     default:
//       console.log("order Error: ", order);
//       break;
//   }

//   return (
//     <>
//       {hotdeals.map((deal) => {
//         return (
//           <CardMapDiv>
//             <LargeCardItem
//               key={deal.DB_SoftIndex}
//               Picture={deal.DB_SmallPicture}
//               DevName={deal.DB_DevName}
//               SoftName={deal.DB_SoftName}
//               BeforeCost={deal.DB_RegCost}
//               AfterCost={deal.DB_DisCost}
//               DisRate={deal.DB_DisRate}
//               Platform={deal.DB_Platform}
//               Address={deal.DB_ProductAddress}
//             />
//           </CardMapDiv>
//         );
//       })}
//     </>
//   );
// };

// export default Hotdeals;
