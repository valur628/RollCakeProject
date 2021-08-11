import React, { useEffect, useState } from "react";
import tempData from "../TempData.json";
import axios from "axios";

const Hotdeals = () => {
  const [hotdeals, setHotdeals] = useState([]);

  useEffect(() => {
    axios.get(tempData).then((response) => {
      console.log(response);
      setHotdeals(response.data);
    });
  });

  useEffect(() => {
    console.log(hotdeals);
  }, [hotdeals]);
};

export default Hotdeals;
