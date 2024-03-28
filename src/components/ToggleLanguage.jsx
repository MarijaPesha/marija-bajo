import React from "react";
import { useLanguage } from "../store/LanguageContextProvider";

const ToggleLanguage = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <button
      className="w-[25px] md:w-[35px] text-xs md:text-base uppercase cursor-pointer bg-[#bcbcbb] text-[#02021e] rounded py-1 text-center font-extrabold"
      onClick={toggleLanguage}
    >
      {language}
    </button>
  );
};

export default ToggleLanguage;
