import React, { useMemo } from 'react';
import { Popup } from '../animation/Popup';
import { motion } from 'framer-motion';
import { skills } from '../const';
import { useTranslation } from 'react-i18next';

export default function Skills() {
    const memoizedData = useMemo(() => {
        return skills;
    }, []);
    const { t, i18n } = useTranslation();

    return (
        <section
            className="h-auto skillsMd:h-auto xl:h-screen skillsMaxHeight:h-maxDesktop bg-gray-100 dark:bg-black flex items-center flex-col"
            id="skills"
        >
            <div className="h-full w-full max-screen:max-w-maxDesktop flex items-center flex-col h-auto ">
                <div
                    className={`sm:h-[13%] h-auto flex justify-center items-end pt-10 ${
                        i18n.language === 'ar' && 'font-arabic'
                    }`}
                >
                    <Popup
                        delay={0.5}
                        className="text-black font-semibold text-3xl sm:text-4xl dark:text-white"
                    >
                        {t('skills.heading')}
                    </Popup>
                </div>
                <div className="flex flex-wrap mt-4 sm:mt-10 justify-around sm:max-w-[80%] mb-4">
                    {memoizedData.map((skill) => (
                        <motion.div
                            initial="hidden"
                            whileInView={'visible'}
                            whileHover={{ scale: 1.2 }}
                            variants={{
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        type: 'spring',
                                    },
                                },
                                hidden: { opacity: 1, y: 80 },
                            }}
                            key={skill.name}
                            className={`py-2 px-2 bg-white md:m-4 mx-1 skill-sm:mx-2 mt-6 rounded-lg flex items-center ${
                                !skill.link && 'justify-center'
                            } cursor-pointer md:w-48 w-40 min-w-[100px] skill-sm:min-w-[192px] border`}
                        >
                            {skill.link && (
                                <img
                                    alt=""
                                    src={skill.link}
                                    className="w-10 skill-sm:w-11 skill:w-12"
                                />
                            )}
                            <h4 className={`text-md ${skill.link && 'ml-4'}`}>
                                {skill.name}
                            </h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
