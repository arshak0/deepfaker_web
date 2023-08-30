import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { enTranslation, armTranslation } from "./index";


i18next.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: false,
  resources: {
    en: enTranslation,
    arm: armTranslation,
  },
});