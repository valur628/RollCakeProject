import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tempData from "../TempData.json";

import Hotdeals from "../components/Hotdeals";

const HotdealPage = () => {
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

  const [order, setOrder] = useState();
  useEffect(() => {
    console.log(order);
  }, [order]);

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
    <div>
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
              // onClick={setOrder("latest")}
            >
              최신순
            </button>
            <button
              type="button"
              className="btn btn-dark"
              // onClick={setOrder("popularity")}
            >
              인기순
            </button>
            <button
              type="button"
              className="btn btn-dark"
              // onClick={setOrder("name")}
            >
              이름순
            </button>
            <button
              type="button"
              className="btn btn-dark"
              // onClick={setOrder("price")}
            >
              가격순
            </button>
            <button
              type="button"
              className="btn btn-dark"
              // onClick={setOrder("disRate")}
            >
              할인율순
            </button>
          </HotdealToolbar>
        </tr>
        <tr>
          <Hotdeals hotdeals={data} order={order} />
        </tr>
      </LargeCardMapTable>
    </div>
  );
};

export default HotdealPage;
