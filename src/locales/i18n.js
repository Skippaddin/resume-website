import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';

import navDE from './de/navigation.json';
import homeDE from './de/home.json';
import projectsDE from './de/projects.json';

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      de: {
        navigation: navDE,
        home: homeDE,
        projects: projectsDE
      }
    },
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;