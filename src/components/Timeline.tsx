import React from 'react';
import { Popup } from '../animation/Popup';
import { SlideLeft } from '../animation/Slide';
import { Experiences } from './Experiences';
import { Education } from './Education';
import { useTranslation } from 'react-i18next';

export default function Timeline() {
    const { t, i18n } = useTranslation();

    return (
        <section
            className={`h-auto bg-white dark:bg-gray-900 border border-transparent flex max-screen:justify-center`}
            id="timeline"
        >
            <div className="w-full max-screen:max-w-maxDesktop">
                <div
                    className={`h-auto flex justify-center items-end pt-10 ${
                        i18n.language === 'ar' && 'font-arabic'
                    }`}
                >
                    <Popup
                        delay={0.5}
                        className={`text-black font-semibold text-3xl sm:text-4xl dark:text-white `}
                    >
                        {t('timeline.heading')}
                    </Popup>
                </div>
                <div className="w-full mt-4 px-7 sm:px-10 md:px-20 sm:mt-10">
                    <div className="h-auto w-full">
                        <SlideLeft
                            delay={0.5}
                            className={`${
                                i18n.language === 'ar' && 'font-arabic'
                            }`}
                        >
                            <h3 className="mb-8 text-xl font-semibold text-black dark:text-white">
                                {t('timeline.experience')}
                            </h3>
                        </SlideLeft>
                        <Experiences></Experiences>
                        <SlideLeft delay={0.5} className="mt-16">
                            <h3
                                className={`mb-8 text-xl font-semibold text-black dark:text-white ${
                                    i18n.language === 'ar' && 'font-arabic'
                                }`}
                            >
                                {t('timeline.education')}
                            </h3>
                        </SlideLeft>
                        <Education></Education>
                    </div>
                </div>
            </div>
        </section>
    );
}
