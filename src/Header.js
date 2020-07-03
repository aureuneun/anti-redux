import React from "react";
import { useLang, useSetLang, useTranslate } from "./context";

const Header = () => {
  const setLang = useSetLang();
  const translate = useTranslate();
  const lang = useLang();
  return (
    <header>
      <h1>{lang}</h1>
      <h5>{translate("hello")}</h5>
      <button onClick={() => setLang((lang) => (lang === "kr" ? "en" : "kr"))}>
        {translate("translate")}
      </button>
    </header>
  );
};

export default Header;
