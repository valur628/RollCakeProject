import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Compo_navibar";
import HotdealPage from "./pages/HotdealPage";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";


function App() {
  // let text = "text 1";
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/search" component={SearchPage}></Route>
          <Route path="/hotdeal" component={HotdealPage}></Route>
          <Route path="/" component={MainPage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;