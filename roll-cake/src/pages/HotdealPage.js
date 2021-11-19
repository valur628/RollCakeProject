import React, { useEffect, useState } from "react";
import styled from "styled-components";

import db from "../components/firebase.config";
import { onSnapshot, collection } from "firebase/firestore";
// import tempData from "../DBresult.json";

import HotdealsL from "../components/Hotdeals";
const options = {
  root: null, //기본 null, 관찰대상의 부모요소를 지정
  rootMargin: "20px", // 관찰하는 뷰포트의 마진 지정
  threshold: 1.0, // 관찰요소와 얼만큼 겹쳤을 때 콜백을 수행하도록 지정하는 요소
};

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

  // const options = {
  //   root: null, //기본 null, 관찰대상의 부모요소를 지정
  //   rootMargin: "20px", // 관찰하는 뷰포트의 마진 지정
  //   threshold: 1.0, // 관찰요소와 얼만큼 겹쳤을 때 콜백을 수행하도록 지정하는 요소
  // };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(handleObserver, options);
  //   if (interSectRef.current) observer.observe(interSectRef.current);
  //   return () => observer.disconnect();
  // }, [handleObserver]);

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
          <HotdealsL hotdeals={data} order={order} />
        </tr>
      </LargeCardMapTable>
    </>
  );
};

export { HotdealPage };
export default HotdealPage;
