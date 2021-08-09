import React, { useEffect } from "react";
import DealData from "../DataTemp.json";

function HotdealPage() {
  useEffect(() => {
    DealData.map((value, key) => {
      console.log(value, key);
    });
  });

  return (
    <div>
      <h1>HotdealPage</h1>
    </div>
  );
}

export default HotdealPage;
