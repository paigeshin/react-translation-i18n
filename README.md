### installation

```bash
npm i --save i18next react-i18next i18next-http-backend i18next-browser-languagedetector
```

- i18next
- react-i18next
- i18next-http-backend
- i18next-browser-languagedetector

### i18n.js

```jsx
import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    detection: {
      order: ["queryString", "cookie"],
      cache: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
```

### index.js

```jsx
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
```

### app.js

```jsx
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
```

### create files

/public/locales/${language-code}

- /public/locales/de/translation.json

```json
{
  "title": "Willkommen zu react und react-i18next",
  "description": {
    "part1": "Guten Morgen"
  }
}
```
