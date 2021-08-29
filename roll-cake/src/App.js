import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Compo_navibar";
import HotdealPage from "./pages/HotdealPage";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import Footers from "./components/Compo_footer";

function App() {
  // let text = "text 1";
  return (
    <Router>
      <div className="App">
        <Navbar />
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
