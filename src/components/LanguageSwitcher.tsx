import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
    { code: 'en', flag: '/flags/en.webp' },
    { code: 'ceb', flag: '/flags/ph.webp' },
    { code: 'fil', flag: '/flags/ph.webp' },
    { code: 'es', flag: '/flags/es.webp' },
    { code: 'fr', flag: '/flags/fr.webp' },
    { code: 'zh', flag: '/flags/cn.webp' },
    { code: 'ja', flag: '/flags/jp.webp' },
    { code: 'pt', flag: '/flags/pt.webp' },
];

export const LanguageSwitcher = () => {
    const { i18n, t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const currentLang =
        languages.find((l) => l.code === i18n.language) || languages[0];
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen((open) => !open);

    const handleLanguageChange = (code: string) => {
        i18n.changeLanguage(code);
        setIsOpen(false);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="w-full inline-flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500"
                aria-haspopup="true"
                aria-expanded={isOpen}
                type="button"
            >
                <img
                    src={currentLang.flag}
                    alt={t(`translation.languages.${currentLang.code}`)}
                    className="rounded-full"
                    style={{
                        aspectRatio: '24/24',
                        width: 24,
                        height: 24,
                        objectFit: 'cover',
                    }}
                />
                <span>{t(`translation.languages.${currentLang.code}`)}</span>
                <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-500" />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 dark:bg-gray-800">
                    <div className="py-1">
                        <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 font-semibold border-b border-gray-200 dark:border-gray-700">
                            {t('translation.select')}
                        </div>
                        {languages.map((lang) => {
                            const isSelected = lang.code === currentLang.code;
                            return (
                                <button
                                    key={lang.code}
                                    onClick={() =>
                                        handleLanguageChange(lang.code)
                                    }
                                    className={`w-full text-right flex items-center gap-2 px-4 py-2 text-sm ${
                                        isSelected
                                            ? 'bg-blue-500 text-white font-semibold'
                                            : 'text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                                    } rounded-md`}
                                    type="button"
                                >
                                    <img
                                        src={lang.flag}
                                        alt={t(
                                            `translation.languages.${lang.code}`
                                        )}
                                        className="rounded-full"
                                        style={{
                                            aspectRatio: '24/24',
                                            width: 24,
                                            height: 24,
                                            objectFit: 'cover',
                                        }}
                                    />
                                    <span>
                                        {t(
                                            `translation.languages.${lang.code}`
                                        )}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 9l6 6 6-6" />
        </svg>
    );
}
