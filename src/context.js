import React, { useState, useContext } from "react";

const LangContext = React.createContext();

const ContextProvider = ({ defaultLang, children, translations }) => {
  const [lang, setLang] = useState(defaultLang);
  const translate = (text) => translations[lang][text];
  return (
    <LangContext.Provider value={{ lang, setLang, translate }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const { lang } = useContext(LangContext);
  return lang;
};

export const useSetLang = () => {
  const { setLang } = useContext(LangContext);
  return setLang;
};

export const useTranslate = () => {
  const { translate } = useContext(LangContext);
  return translate;
};

export default ContextProvider;
