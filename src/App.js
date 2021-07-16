import "./App.css";
import React from "react";
import { Trans, useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>DE</button>
      <button onClick={() => changeLanguage("de")}>EN</button>
      <hr />
      <Trans i18nKey="title" />
      <div>{t("description.part1")}</div>
    </div>
  );
}

export default App;
