import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguageHandler = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "bhs" : "en"));
  };

  const contextValue = {
    language: language,
    toggleLanguage: toggleLanguageHandler,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
