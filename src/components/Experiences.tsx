import React, { useMemo } from 'react';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { PiBriefcaseMetal } from 'react-icons/pi';
import { experiences } from '../const';
import { useTranslation } from 'react-i18next';

export const Experiences = () => {
    const { t, i18n } = useTranslation();
    const memoizedData = useMemo(() => {
        return experiences;
    }, []);

    return (
        <>
            <ol className="relative border-l border-gray-300 dark:border-gray-600">
                {memoizedData.map((e, i) => (
                    <li key={i} className="mb-10 ml-6">
                        <div
                            className={`bg-gray-800 px-4 py-3 rounded-lg ${
                                i18n.language === 'ar' &&
                                'text-right fontOnly-arabic'
                            }`}
                        >
                            <span className="flex absolute -left-3.5 justify-center items-center w-7 h-7 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 -mt-1">
                                <img
                                    src={e.logo}
                                    alt={t(e.title)}
                                    className="w-full h-full rounded-full"
                                />
                            </span>
                            <h3 className="text-lg font-semibold text-white">
                                {t(e.title)}
                            </h3>
                            <p className="block mb-3 text-sm font-normal leading-none text-gray-400">
                                {t(e.role)}
                            </p>
                            <pre className="mb-4 text-base font-sans whitespace-pre-wrap font-normal text-gray-300">
                                {t(e.description)}
                            </pre>

                            <a
                                href={e.link}
                                className="text-blue-300 underline break-all"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {e.link}
                            </a>

                            <div
                                className={`mt-4 flex flex-wrap ${
                                    i18n.language === 'ar' && 'justify-end'
                                }`}
                            >
                                {e.tech.map((tech) => (
                                    <div
                                        key={tech}
                                        className="mb-2 py-1 px-2 text-xs rounded-md mr-2 bg-gray-600 text-gray-2 text-white"
                                    >
                                        {tech}
                                    </div>
                                ))}
                            </div>

                            <div
                                className={`flex items-center space-x-2 mt-2 text-sm text-gray-400 ${
                                    i18n.language === 'ar' && 'justify-end'
                                }`}
                            >
                                <IoCalendarNumberOutline size={16} />
                                <time>{t(e.date)}</time>
                            </div>
                        </div>

                        {e.subItems && (
                            <ol className="mt-4 space-y-10 relative border-l border-gray-300 dark:border-gray-600">
                                {e.subItems.map((subItem, idx) => (
                                    <li
                                        key={idx}
                                        className={`p-1 ml-6 ${
                                            i18n.language === 'ar' &&
                                            'text-right fontOnly-arabic'
                                        }`}
                                    >
                                        <span className="flex absolute -left-3.5 justify-center items-center w-7 h-7 bg-blue-200 rounded-full dark:bg-gray-700 dark:text-white text-black -mt-1">
                                            <PiBriefcaseMetal />
                                        </span>
                                        <h4
                                            className={`flex items-center font-semibold text-md text-gray-900 dark:text-white ${
                                                i18n.language === 'ar' &&
                                                'justify-end'
                                            }`}
                                        >
                                            {t(subItem.position)}
                                        </h4>
                                        <time className="block mb-3 text-sm font-normal leading-none text-gray-700 dark:text-gray-400">
                                            {t(subItem.setup)}
                                        </time>

                                        {subItem.projects?.map((project, j) => (
                                            <div className="mt-2" key={j}>
                                                <p className="mb-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                    {t(project.description)}
                                                </p>
                                                <div
                                                    className={`-mt-2 flex flex-wrap ${
                                                        i18n.language ===
                                                            'ar' &&
                                                        'justify-end'
                                                    }`}
                                                >
                                                    {project.tech.map(
                                                        (tech) => (
                                                            <div
                                                                key={tech}
                                                                className="mb-2 py-1 px-2 text-xs rounded-md mr-2 bg-gray-800 text-white dark:text-gray-300"
                                                            >
                                                                {tech}
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        ))}

                                        <div
                                            className={`flex items-center space-x-2 mt-2 text-sm text-gray-700 dark:text-gray-400 ${
                                                i18n.language === 'ar' &&
                                                'justify-end'
                                            }`}
                                        >
                                            <IoCalendarNumberOutline
                                                size={16}
                                            />
                                            <time>{t(subItem.date)}</time>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        )}
                    </li>
                ))}
            </ol>
        </>
    );
};
