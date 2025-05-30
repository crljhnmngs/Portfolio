import React, { useMemo } from 'react';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { educations } from '../const';
import { useTranslation } from 'react-i18next';

export const Education = () => {
    const { t, i18n } = useTranslation();
    const memoizedData = useMemo(() => {
        return educations;
    }, []);
    return (
        <div className="-mt-3">
            <ol
                className={`relative border-l border-gray-300 dark:border-gray-600`}
            >
                {memoizedData.map((e, i) => (
                    <li
                        key={i}
                        className={`p-1 mb-10 ml-6  ${
                            i18n.language === 'ar' &&
                            'text-right fontOnly-arabic'
                        }`}
                    >
                        <span className="flex absolute -left-3.5 justify-center items-center w-7 h-7 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <img
                                src={e.logo}
                                alt={e.school}
                                className="w-full h-full rounded-full"
                            />
                        </span>
                        <h3
                            className={`flex items-center text-lg font-semibold text-gray-900 dark:text-white ${
                                i18n.language === 'ar' && 'justify-end'
                            }`}
                        >
                            {t(e.school)}
                        </h3>
                        <time className="block mb-3 text-sm font-normal leading-none text-gray-700 dark:text-gray-400">
                            {t(e.track)}
                        </time>
                        <p className="mb-4 text-base font-normal text-gray-700 dark:text-gray-400">
                            {t(e.course)}
                        </p>
                        <div
                            className={`-mt-2 flex flex-wrap ${
                                i18n.language === 'ar' && 'justify-end'
                            }`}
                        >
                            {e.tech.map((tech) => (
                                <div
                                    key={tech}
                                    className="mb-2 py-1 px-2 text-xs rounded-md mr-2 bg-gray-800  text-white dark:text-gray-300"
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>
                        <div
                            className={`flex items-center space-x-2 mt-2 text-sm text-gray-700 dark:text-gray-400 ${
                                i18n.language === 'ar' && 'justify-end'
                            }`}
                        >
                            <IoCalendarNumberOutline size={16} />
                            <time>{t(e.date)}</time>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
};
