import React, { useEffect } from "react";
import tempData from "../TempData.json";

function HotdealPage() {
  useEffect(() => {
    tempData.map((value, key) => {
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
