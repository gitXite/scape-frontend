import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from '../locales/en/common.json';
import nbCommon from '../locales/nb/common.json';
import enHome from '../locales/en/home.json';
import nbHome from '../locales/nb/home.json';
import enCustomizer from '../locales/en/customizer.json';
import nbCustomizer from '../locales/nb/customizer.json';
import enCheckout from '../locales/en/checkout.json';
import nbCheckout from '../locales/nb/checkout.json';
import enPages from '../locales/en/pages.json';
import nbPages from '../locales/nb/pages.json';
import enPolicies from '../locales/en/policies.json';
import nbPolicies from '../locales/nb/policies.json';

export const defaultNS = 'common';
export const resources = {
    nb: {
        common: nbCommon,
        home: nbHome,
        customizer: nbCustomizer,
        checkout: nbCheckout,
        pages: nbPages,
        policies: nbPolicies,
    },
    en: {
        common: enCommon,
        home: enHome,
        customizer: enCustomizer,
        checkout: enCheckout,
        pages: enPages,
        policies: enPolicies,
    },
} as const;

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'nb',
        supportedLngs: ['nb', 'en'],
        defaultNS,
        fallbackNS: 'common',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['querystring', 'localStorage', 'navigator'],
            lookupQuerystring: 'lng',
            lookupLocalStorage: 'i18nextLng',
            caches: ['localStorage'],
        },
        react: {
            useSuspense: false,
        },
    });

// Normalize Norwegian language codes (no, nb, nn) to 'nb'
if (typeof window !== 'undefined') {
    const currentLang = i18n.resolvedLanguage;
    if (currentLang?.startsWith('no') || currentLang?.startsWith('nn')) {
        i18n.changeLanguage('nb');
    }
    document.documentElement.lang = i18n.resolvedLanguage || 'nb';
}

i18n.on('languageChanged', (lng) => {
    if (typeof document !== 'undefined') {
        document.documentElement.lang = lng;
    }
});

export default i18n;
