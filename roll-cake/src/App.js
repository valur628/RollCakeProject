import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import db from "./components/firebase.config";
import { onSnapshot, collection } from "firebase/firestore";

import Navigation from "./components/Compo_navibar";
import HotdealPage from "./pages/HotdealPage";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import Footers from "./components/Compo_footer";

function App() {
  // const [data, setData] = useState([]);
  // useEffect(
  //   () =>
  //     onSnapshot(collection(db, "ScrapingDB"), (snapshot) =>
  //       setData(snapshot.docs.map((doc) => doc.data()))
  //     ),
  //   []
  // );
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/hotdeal" component={HotdealPage} exact></Route>
          <Route path="/search" component={SearchPage} exact></Route>
          <Route path="/" component={MainPage}></Route>
          {/* exact 삭제 */}
        </Switch>
        <Footers />
      </div>
    </Router>
  );
}

export default App;
