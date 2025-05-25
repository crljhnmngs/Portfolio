import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import * as LOCALES from './locales';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: LOCALES.EN },
            ceb: { translation: LOCALES.CEB },
            fil: { translation: LOCALES.FIL },
            es: { translation: LOCALES.ES },
            fr: { translation: LOCALES.FR },
            zh: { translation: LOCALES.ZH },
            ja: { translation: LOCALES.JA },
            pt: { translation: LOCALES.PT },
        },
        fallbackLng: 'en',
        supportedLngs: ['en', 'fr', 'es', 'ceb', 'fil', 'zh', 'ja', 'pt'],
        ns: ['translation'],
        defaultNS: 'translation',
        debug: import.meta.env.VITE_ENVIRONMENT === 'DEV',
        interpolation: { escapeValue: false },
        detection: {
            order: [
                'querystring',
                'cookie',
                'localStorage',
                'navigator',
                'htmlTag',
            ],
            caches: ['localStorage', 'cookie'],
            cookieMinutes: 10080,
            cookieDomain: window.location.hostname,
            lookupQuerystring: 'lng',
            lookupCookie: 'i18next',
            lookupLocalStorage: 'i18nextLng',
        },
        react: {
            useSuspense: true,
        },
    });

export default i18n;
