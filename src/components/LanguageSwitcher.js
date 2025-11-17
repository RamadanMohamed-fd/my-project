import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  const handleToggle = () => {
    const newLanguage = currentLanguage === "en" ? "ar" : "en";
    changeLanguage(newLanguage);
  };

  return (
    <div className="language-switcher relative z-50">
      <button
        onClick={handleToggle}
        className=" w-10 h-8  text-white rounded-full text-sm  relative overflow-hidden transition-all duration-500"
      >
        {/* English */}
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            currentLanguage === "en"
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full"
          }`}
        >
          EN
        </span>

        {/* Arabic */}
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            currentLanguage === "ar"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-full"
          }`}
        >
          AR
        </span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
