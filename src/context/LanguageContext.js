import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  // All translations in one place
  const translations = {
    en: {
      // Navigation items
      nav_about: "About",
      nav_features: "Features",
      nav_impact: "Impact",
      nav_achievements: "Achievements",
      nav_partners: "Partners",
      nav_contact: "Contact",
      nav_login: "Login",
      // Common
      close: "Close",
      menu: "Menu",
    },
    ar: {
      // Navigation items
      nav_about: "من نحن",
      nav_features: "الميزات",
      nav_impact: "التأثير",
      nav_achievements: "الإنجازات",
      nav_contact: "اتصل بنا",
      nav_partners: "الشركاء",
      nav_login: "تسجيل الدخول",

      // Common
      close: "إغلاق",
      menu: "القائمة",
    },
  };

  // Simple translation function
  const t = (key) => {
    return translations[currentLanguage][key] || key;
  };

  const changeLanguage = (lng) => {
    setCurrentLanguage(lng);

    // Update HTML direction and lang attribute
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lng;

    // Save to localStorage
    localStorage.setItem("preferred-language", lng);
  };

  useEffect(() => {
    // Load saved language preference
    const savedLanguage = localStorage.getItem("preferred-language");
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ar")) {
      changeLanguage(savedLanguage);
    } else {
      // Set default language
      changeLanguage("en");
    }
  }, []);

  const value = {
    currentLanguage,
    changeLanguage,
    t, // translation function
    isRTL: currentLanguage === "ar",
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
