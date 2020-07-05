import React from "react";

const List = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>
      <ul>{children}</ul>
    </>
  );
};

export default List;
