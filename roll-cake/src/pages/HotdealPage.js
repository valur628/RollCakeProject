import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tempData from "../DBresult.json";
// import tempData from "../TempData.json";

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
              // 이렇게 쓰면 안됨
              // https://stackoverflow.com/questions/59304283/error-too-many-re-renders-react-limits-the-number-of-renders-to-prevent-an-in?rq=1
              onClick={() => setOrder("latest")}
            >
              최신순
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => setOrder("popularity")}
            >
              인기순
            </button>
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
              onClick={() => setOrder("price")}
            >
              가격순
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => setOrder("disRate")}
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

// import React, { Component } from "react";

// class HotdealPage extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "React",
//     };
//     this.onValueChange = this.onValueChange.bind(this);
//     this.formSubmit = this.formSubmit.bind(this);
//   }

//   onValueChange(event) {
//     this.setState({
//       selectedOption: event.target.value,
//     });
//   }

//   formSubmit(event) {
//     event.preventDefault();
//     console.log(this.state.selectedOption);
//   }

//   render() {
//     return (
//       <form onSubmit={this.formSubmit}>
//         <div className="radio">
//           <label>
//             <input
//               type="radio"
//               value="Male"
//               checked={this.state.selectedOption === "Male"}
//               onChange={this.onValueChange}
//             />
//             Male
//           </label>
//         </div>
//         <div className="radio">
//           <label>
//             <input
//               type="radio"
//               value="Female"
//               checked={this.state.selectedOption === "Female"}
//               onChange={this.onValueChange}
//             />
//             Female
//           </label>
//         </div>
//         <div className="radio">
//           <label>
//             <input
//               type="radio"
//               value="Other"
//               checked={this.state.selectedOption === "Other"}
//               onChange={this.onValueChange}
//             />
//             Other
//           </label>
//         </div>
//         <div>Selected option is : {this.state.selectedOption}</div>
//         <button className="btn btn-default" type="submit">
//           Submit
//         </button>
//       </form>
//     );
//   }
// }

// export default HotdealPage;
