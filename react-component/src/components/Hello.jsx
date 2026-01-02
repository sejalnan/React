import React from "react";

const Hello = ({ username, children }) => {
  return (
    <div>
      <h1>Hello React </h1>
      {children}
    </div>
  );
};

export default Hello;
