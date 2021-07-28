import React, { useState, useEffect } from "react";
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
    <div className="App">
      <Navbar />
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
    </div>
  );
}

export default App;
