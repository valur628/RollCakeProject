import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Compo_navibar";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("effect");
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
  };

  // let text = "text 1";

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/hotdeal">
            <h1>hotdeal</h1>
          </Route>
          <Route path="/">
            <h1>home</h1>
            <form onSubmit={onSubmit}>
              <input
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <input
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <button onClick={onSubmit}>로그인</button>
            </form>
            <form onSubmit={onSubmit}>
              <input
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <input
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <button onClick={onSubmit}>로그인</button>
            </form>
            <form onSubmit={onSubmit}>
              <input
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <input
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <button onClick={onSubmit}>로그인</button>
            </form>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
