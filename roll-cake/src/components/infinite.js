import React, { useEffect, useState } from "react";
import HotdealsL from "../components/Hotdeals";

const Infinite = ({ data, order, num, fetching, fetchMoreData }) => {
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight && !fetching) {
      fetchMoreData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <tr>
      <HotdealsL hotdeals={data} order={order} num={num} />
    </tr>
  );
};

export default Infinite;

// import React, { useEffect, useState } from "react";
// import Card from "../utils/card/card";

// const Infinite = ({ posts, fetching, fetchMoreData }) => {
//   const [postInfo, setPostInfo] = useState([]);

//   useEffect(() => {
//     setPostInfo(posts);
//   }, [posts]);

//   const handleScroll = () => {
//     const scrollHeight = document.documentElement.scrollHeight;
//     const scrollTop = document.documentElement.scrollTop;
//     const clientHeight = document.documentElement.clientHeight;

//     if (scrollTop + clientHeight >= scrollHeight && fetching === false) {
//       fetchMoreData();
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   });
//   return (
//     <div>
//       {postInfo &&
//         postInfo.map((post, idx) => <Card key={idx} listInfo={post} />)}
//     </div>
//   );
// };

// export default Infinite;
