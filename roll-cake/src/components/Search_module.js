import React from "react";

const searchSoft = (data, query) => {
  if (!query) {
    return data;
  }

  try {
    return data.filter((post) => {
      const softName = post.SoftName.toLowerCase();
      return softName.includes(query);
    });
  } catch (e) {
    console.log(e);
  }
};

export { searchSoft };

const searchDev = (data, query) => {
  if (!query) {
    return data;
  }

  try {
    return data.filter((post) => {
      const devName = post.DevName.toLowerCase();
      return devName.includes(query);
    });
  } catch (e) {
    console.log(e);
  }
};

export { searchDev };
