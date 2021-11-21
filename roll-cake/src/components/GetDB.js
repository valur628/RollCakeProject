// import { useEffect, useState } from "react";
// import db from "../components/firebase.config";
// import { onSnapshot, collection } from "firebase/firestore";

// const GetDB = () => {
//   const [data, setData] = useState([]);
//   useEffect(
//     () =>
//       onSnapshot(collection(db, "ScrapingDB"), (snapshot) =>
//         setData(snapshot.docs.map((doc) => doc.data()))
//       ),
//     []
//   );

//   return data;
// };

// export default GetDB;
