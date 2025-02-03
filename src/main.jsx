import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import i18next from "i18next"
import { I18nextProvider } from 'react-i18next';
import global_en from"./translations/en/global.json";
import global_fi from "./translations/fi/global.json";

i18next.init({
  interpolation: {escapeValue: false},
  lng: "fi",
  resources: {
    en:{
      global: global_en
    },
    fi:{
      global: global_fi
    },
  }
  
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
  </StrictMode>,
)
