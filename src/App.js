import React from "react";
import Screen from "./Screen";
import ContextProvider from "./context";
import translations from "./translations";

function App() {
  return (
    <ContextProvider defaultLang="en" translations={translations}>
      <Screen />
    </ContextProvider>
  );
}

export default App;
