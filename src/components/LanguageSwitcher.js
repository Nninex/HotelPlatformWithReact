import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ge" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="btn-container">
      <button onClick={toggleLanguage} className="btn btn-primary mt-3 ">
        {i18n.language === "en" ? "ქარ" : "En"}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
