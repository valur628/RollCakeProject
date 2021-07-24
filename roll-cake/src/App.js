import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
  };

  // let text = "text 1";

  return (
    <div className="App">
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
