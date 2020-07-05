import React from "react";
import Header from "./Header";
import Counter from "./Counter";
import ToDo from "./ToDo";

const Screen = () => {
  return (
    <>
      <Counter />
      <Header />
      <ToDo />
    </>
  );
};

export default Screen;
