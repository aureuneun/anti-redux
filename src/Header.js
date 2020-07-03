import React from "react";
import { useUser } from "./context";

const Header = () => {
  const { name, loggedIn } = useUser();
  console.log(name, loggedIn);
  return (
    <>
      <header>
        Hello! {name}, You are {loggedIn ? "logged in" : "logged out"}
      </header>
    </>
  );
};

export default Header;
