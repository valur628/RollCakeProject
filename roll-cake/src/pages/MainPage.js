import React, { useState, useEffect } from "react";
import { LargeCardItem } from "./Compo_cards";
import { MediumCardItem } from "./Compo_cards";

function MainPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("effect");
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
  };
  const abc = "140%";
  return (
    <>
    <LargeCardItem
      Picture="https://github.com/wncjf2000/RollCakeComponents/blob/main/pic/Minecraft-360.png?raw=true"
      DevName="마이크로소프트"
      SoftName="마인크래프트"
      BeforeCost="30,000"
      AfterCost="15,000"
      DisRate={abc}
      Platform="https://github.com/wncjf2000/RollCakeComponents/blob/main/pic/Steam_icon_logo.png?raw=true"
    ></LargeCardItem>
    <br></br>
    <MediumCardItem
      Picture="https://github.com/wncjf2000/RollCakeComponents/blob/main/pic/Minecraft-360.png?raw=true"
      DevName="마이크로소프트"
      SoftName="마인크래프트"
      BeforeCost="30,000"
      AfterCost="15,000"
      DisRate={abc}
      Platform="https://github.com/wncjf2000/RollCakeComponents/blob/main/pic/Steam_icon_logo.png?raw=true"
    ></MediumCardItem>
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
    </>
  );
}

export default MainPage;
