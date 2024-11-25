import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './i18n/en.json';
import pt from './i18n/pt.json';

i18n
  .use(LanguageDetector) // Detecta automaticamente o idioma do navegador
  .use(initReactI18next) // Inicializa o react-i18next
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt },
    },
    fallbackLng: 'en', // Idioma padrão
    interpolation: {
      escapeValue: false, // React já faz o escaping
    },
  });

export default i18n;
