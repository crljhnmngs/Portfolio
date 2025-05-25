import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="h-12 bg-gray-100 dark:bg-black text-black dark:text-white z-10 absolute bottom-0 w-full flex items-center justify-center">
            {t('footer.madeWith')}
            <div className="text-red-500 px-2 text-2xl">&#10084;</div>
            {t('footer.by')}
        </footer>
    );
};
