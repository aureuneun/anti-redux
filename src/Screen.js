import React from "react";
import Header from "./Header";
import { useUserLoggedOut, useUserLoggedIn } from "./context";

const Screen = () => {
  const userLoggedIn = useUserLoggedIn();
  const userLoggedOut = useUserLoggedOut();
  return (
    <>
      <Header />
      <button onClick={userLoggedIn}>Logged In</button>
      <button onClick={userLoggedOut}>Logged Out</button>
    </>
  );
};

export default Screen;
