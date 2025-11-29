import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "nb",
        supportedLngs: ["en", "nb"],
        ns: ["common", "home", "getStarted"],
        defaultNS: "common",
        interpolation: {
            escapeValue: false
        },
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json"
        },
        detection: {
            order: ["querystring", "localStorage", "navigator"],
            caches: ["localStorage"]
        },
        react: {
            useSuspense: true
        }
    });

export default i18n;
