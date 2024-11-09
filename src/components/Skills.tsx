import React, { useMemo } from 'react';
import { Popup } from '../animation/Popup';
import { motion } from 'framer-motion';
import { skills } from '../const';

export default function Skills() {
    const memoizedData = useMemo(() => {
        return skills;
    }, []);

    return (
        <section
            className="h-auto skill:h-screen  bg-gray-100 dark:bg-black sm:px-6 lg:px-8 px-4 mx-auto flex items-center flex-col"
            id="skills"
        >
            <div className="sm:h-[13%] h-auto flex justify-center items-end pt-10 home:pt-0">
                <Popup
                    delay={0.5}
                    className="text-black font-semibold text-3xl sm:text-4xl dark:text-white"
                >
                    My Skills
                </Popup>
            </div>
            <div className="flex flex-wrap mt-4 sm:mt-10 justify-around max-w-7xl mb-4">
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
        </section>
    );
}
