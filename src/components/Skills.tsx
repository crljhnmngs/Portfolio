import React from 'react';
import { Popup } from '../animation/Popup';
import { motion } from 'framer-motion';

export default function Skills() {
    const skills = [
        {
            name: 'TypeScript',
            link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
        },
        {
            name: 'JavaScript',
            link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
        },
        {
            name: 'VBScript',
            link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/visualbasic/visualbasic-original.svg',
        },
        {
            name: 'HTML',
            link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
        },
        {
            name: 'CSS',
            link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
        },
        {
            name: 'Bootstrap',
            link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original-wordmark.svg',
        },
        {
            name: 'Sass',
            link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
        },
        {
            name: 'Tailwind CSS',
            link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg',
        },
        {
            name: 'Material UI',
            link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg',
        },
        {
            name: 'React',
            link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
        },
        // {
        //     name: 'Redux',
        //     link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
        // },
        {
            name: 'MobX',
            link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mobx/mobx-original.svg',
        },
        {
            name: 'NodeJS',
            link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
        },
        {
            name: 'C++',
            link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
        },
        {
            name: 'Java',
            link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg',
        },
        {
            name: 'Spring Boot',
            link: 'https://spring.io/img/projects/spring-boot.svg',
        },
        {
            name: 'C#',
            link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg',
        },
        {
            name: 'ASP.NET Core',
            link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg',
        },
        {
            name: 'PHP',
            link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
        },
        {
            name: 'Python',
            link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
        },
        {
            name: 'MySQl',
            link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
        },
        {
            name: 'Git',
            link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
        },
        {
            name: 'SVN',
            link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/subversion/subversion-original.svg',
        },
    ];

    return (
        <section
            className="h-auto skill:h-screen bg-gray-100 dark:bg-black sm:px-6 lg:px-8 px-4 mx-auto flex items-center flex-col"
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
                {skills.map((skill) => (
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
                        className="py-2 px-2 bg-white md:m-4 mx-1 skill-sm:mx-2 mt-6 rounded-lg flex items-center cursor-pointer md:w-48 w-40 min-w-[100px] skill-sm:min-w-[192px] border"
                    >
                        <img
                            alt=""
                            src={skill.link}
                            className="w-10 skill-sm:w-11 skill:w-12"
                        />
                        <h4 className="text-md ml-4">{skill.name}</h4>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
