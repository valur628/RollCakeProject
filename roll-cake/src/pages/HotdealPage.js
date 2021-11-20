import React, { useEffect, useState } from "react";
import styled from "styled-components";

import useIntersectionObserver from "../components/useIntersectionObserver";
import Infinite from "../components/infinite";

import db from "../components/firebase.config";
import { onSnapshot, collection } from "firebase/firestore";
// import tempData from "../DBresult.json";

import HotdealsL from "../components/Hotdeals";

const HotdealPage = (props) => {
  const [data, setData] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, "ScrapingDB"), (snapshot) =>
        setData(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );

  const [order, setOrder] = useState(props);
  useEffect(() => {
    // console.log(order);
  }, [order]);

  const [num, setNum] = useState(20);
  useEffect(() => {
    console.log("num", num);
  });

  // // request state
  // const [loading, setLoading] = useState(false);

  // window.onscroll = function () {
  //   const scrollHeight = document.documentElement.scrollHeight;
  //   const scrollTop = document.documentElement.scrollTop;
  //   const clientHeight = document.documentElement.clientHeight;

  //   if (scrollTop + clientHeight >= scrollHeight && !loading) {
  //     scrollToEnd();
  //   }
  // };
  // const scrollToEnd = () => {
  //   setLoading(true);
  //   setNum(num + 20); // 이렇게 하면 뒤에만 보임
  // };

  // useIntersectionObserver({
  //   onIntersect: ([{ isIntersecting }]) => {
  //     // if (
  //     //   isIntersecting &&
  //     //   !loading &&
  //     //   currentPage.current < totalPage.current
  //     // ) {
  //     //   scrollToEnd();
  //     // }
  //     window.onscroll = function () {
  //       if (
  //         isIntersecting &&
  //         !loading &&
  //         window.innerHeight + document.documentElement.scrollTop ===
  //           document.documentElement.offsetHeight
  //       ) {
  //         scrollToEnd();
  //       }
  //     };
  //   },
  // });

  const LargeCardMapTable = styled.table`
    margin-left: auto;
    margin-right: auto;
    vertical-align: middle;
  `;
  const HotdealToolbar = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 100%;
    max-width: 1200px;
    max-height: 170px;
    padding-top: 2%;
    vertical-align: middle;
    text-align: center;
  `;

  return (
    <>
      <LargeCardMapTable>
        <tr>
          <HotdealToolbar
            className="btn-group btn-group-lg btn-group-custom"
            role="group"
            aria-label="toolbar"
          >
            <button
              type="button"
              className="btn btn-dark"
              // onClick={setOrder("latest")} // 이렇게 쓰면 안됨
              // https://stackoverflow.com/questions/59304283/error-too-many-re-renders-react-limits-the-number-of-renders-to-prevent-an-in?rq=1
              onClick={() => setOrder("latest")}
            >
              최신순
            </button>
            {/* <button
              type="button"
              className="btn btn-dark"
              onClick={() => setOrder("popularity")}
            >
              인기순
            </button> */}
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => setOrder("name")}
            >
              이름순
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => setOrder("HighPrice")}
            >
              높은가격순
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => setOrder("LowPrice")}
            >
              낮은가격순
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => setOrder("HighDisRate")}
            >
              높은할인율순
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => setOrder("LowDisRate")}
            >
              낮은할인율순
            </button>
          </HotdealToolbar>
        </tr>
        <tr>
          <HotdealsL hotdeals={data} order={order} num={num} />
          {/* <Infinite data={data} order={order} num={num} fetching={loading}  /> */}
        </tr>
        ;
      </LargeCardMapTable>
    </>
  );
};

// const HotdealPage = (props) => {
//   const [data, setData] = useState([]);
//   useEffect(
//     () =>
//       onSnapshot(collection(db, "ScrapingDB"), (snapshot) =>
//         setData(snapshot.docs.map((doc) => doc.data()))
//       ),
//     []
//   );

//   const [order, setOrder] = useState(props);
//   useEffect(() => {
//     // console.log(order);
//   }, [order]);

//   const [fetching, setFetching] = useState(false);

//   const [num, setNum] = useState(20);
//   useEffect(() => {
//     console.log("num", num);
//   });

//   // const [skip, setSkip] = useState(0);
//   // const [limit, setLimit] = useState(10);
//   // const [fetching, setFetching] = useState(false);

//   // useEffect(() => {
//   //   const body = {
//   //     skip: skip,
//   //     limit: limit,
//   //   };
//   //   // getData(body);
//   // }, []);

//   // const getData = (body) => {
//   //   axios
//   //     .post("/api/url", body)
//   //     .then((res) => {
//   //       if (body.loadMore) setListInfo([...listInfo, ...res.data.listInfo]);
//   //       else setListInfo(res.data.listInfo);
//   //     })
//   //     .catch((err) => alert("글을 가져오는데 실패 했습니다."));
//   // };

//   const scrollToEnd = () => {
//     setFetching(true);
//     setNum(num + 20);
//   };

//   // window.onscroll = function () {
//   //   if (
//   //     window.innerHeight + document.documentElement.scrollTop ===
//   //     document.documentElement.offsetHeight
//   //   ) {
//   //     scrollToEnd();
//   //   }
//   // };

//   window.onscroll = function () {
//     const scrollHeight = document.documentElement.scrollHeight;
//     const scrollTop = document.documentElement.scrollTop;
//     const clientHeight = document.documentElement.clientHeight;

//     if (scrollTop + clientHeight >= scrollHeight && !fetching) {
//       scrollToEnd();
//     }
//   };

//   const LargeCardMapTable = styled.table`
//     margin-left: auto;
//     margin-right: auto;
//     vertical-align: middle;
//   `;
//   const HotdealToolbar = styled.div`
//     margin-left: auto;
//     margin-right: auto;
//     width: 100%;
//     height: 100%;
//     max-width: 1200px;
//     max-height: 170px;
//     padding-top: 2%;
//     vertical-align: middle;
//     text-align: center;
//   `;

//   return (
//     <>
//       <LargeCardMapTable>
//         <tr>
//           <HotdealToolbar
//             className="btn-group btn-group-lg btn-group-custom"
//             role="group"
//             aria-label="toolbar"
//           >
//             <button
//               type="button"
//               className="btn btn-dark"
//               // onClick={setOrder("latest")} // 이렇게 쓰면 안됨
//               // https://stackoverflow.com/questions/59304283/error-too-many-re-renders-react-limits-the-number-of-renders-to-prevent-an-in?rq=1
//               onClick={() => setOrder("latest")}
//             >
//               최신순
//             </button>
//             {/* <button
//               type="button"
//               className="btn btn-dark"
//               onClick={() => setOrder("popularity")}
//             >
//               인기순
//             </button> */}
//             <button
//               type="button"
//               className="btn btn-dark"
//               onClick={() => setOrder("name")}
//             >
//               이름순
//             </button>
//             <button
//               type="button"
//               className="btn btn-dark"
//               onClick={() => setOrder("HighPrice")}
//             >
//               높은가격순
//             </button>
//             <button
//               type="button"
//               className="btn btn-dark"
//               onClick={() => setOrder("LowPrice")}
//             >
//               낮은가격순
//             </button>
//             <button
//               type="button"
//               className="btn btn-dark"
//               onClick={() => setOrder("HighDisRate")}
//             >
//               높은할인율순
//             </button>
//             <button
//               type="button"
//               className="btn btn-dark"
//               onClick={() => setOrder("LowDisRate")}
//             >
//               낮은할인율순
//             </button>
//           </HotdealToolbar>
//         </tr>
//         <tr>
//           <HotdealsL hotdeals={data} order={order} num={num} />
//         </tr>
//         <tr>
//           <button
//             type="button"
//             className="btn btn-dark"
//             onClick={() => setNum(num + 30)}
//           >
//             다음 페이지
//           </button>
//         </tr>
//       </LargeCardMapTable>
//     </>
//   );
// };

export { HotdealPage };
export default HotdealPage;
