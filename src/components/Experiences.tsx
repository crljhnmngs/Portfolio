import React, { useMemo } from 'react';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { PiBriefcaseMetal } from 'react-icons/pi';
import LogoAlliance from '../assets/images/Alliance.webp';
import LogoMVP from '../assets/images/mvp.webp';

export const Experiences = () => {
    const experiences = useMemo(
        () => [
            {
                logo: LogoAlliance,
                role: 'Software Engineer',
                title: 'Alliance Software Inc.',
                description:
                    'Software Engineer at Alliance Software Inc, a global IT services and solutions company. Alliance was established in 2000 and has since grown to become one of the Philippines largest and most respected independent software development outsourcing company.',
                link: 'https://alliance.com.ph/',
                tech: [
                    'React',
                    'TypeScript',
                    'ASP.net Core',
                    'C++',
                    'VBScript',
                    'JavaScript',
                    'Waterfall',
                ],

                date: 'October 2022 - Present',
                subItems: [
                    {
                        position: 'Technical Specialist II',
                        setup: 'On-site',
                        projects: [
                            {
                                description: `Developing a web UI cardless transaction for our Japanese client's ATMs here in the Philippines. Bank: BDO`,
                                tech: [
                                    'C++',
                                    'VBScript',
                                    'HTML',
                                    'JavaScript',
                                    'C#',
                                    'SVN',
                                    'Waterfall',
                                ],
                            },
                        ],
                        date: 'January 2024 - Present',
                    },
                    {
                        position: 'Technical Specialist I',
                        setup: 'On-site',
                        projects: [
                            {
                                description:
                                    'Developed a full-stack web application for one of our clients in the Philippines.',
                                tech: [
                                    'React',
                                    'TypeScript',
                                    'MobX',
                                    'Material UI',
                                    'ASP.net Core',
                                ],
                            },
                            {
                                description:
                                    'Developed a demo ATM web service for our Japanese client to showcase their new ATM application to their clients.',
                                tech: [
                                    'JavaScript',
                                    'HTML',
                                    'Bootstrap + Sass',
                                    'C#',
                                ],
                            },
                            {
                                description: `I was assigned to provide bank support for our Japanese client's ATMs here in the Philippines. My tasks include fixing bugs in their legacy base code and developing new functionalities based on specific bank requests. Banks: BDO, MBTC, and EWB`,
                                tech: ['C++', 'VBScript', 'SVN', 'Waterfall'],
                            },
                        ],
                        date: 'October 2022 - January 2024',
                    },
                ],
            },
            {
                logo: LogoMVP,
                title: 'MVP.dev',
                role: 'Software QA (Intern)',
                link: 'https://mvp.dev/',
                description:
                    'Software QA Intern at MVP.dev, MVP.dev help business owners harness the power of no-code technology to bring their vision to life in weeks through a high-touch proven process.',
                tech: [
                    'Test Plan',
                    'Test Cases',
                    'Integration tests',
                    'Functional tests',
                ],
                date: 'March 2022 - June 2022',
            },
        ],
        []
    );
    return (
        <div>
            <ol className="relative border-l border-gray-300 dark:border-gray-600">
                {experiences.map((e, i) => (
                    <li key={i} className="mb-10 ml-6">
                        <div className="bg-gray-800 px-4 py-3 rounded-lg">
                            <span className="flex absolute -left-3.5 justify-center items-center w-7 h-7 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 -mt-1">
                                <img
                                    src={e.logo}
                                    alt={e.title}
                                    className="w-full h-full rounded-full"
                                />
                            </span>
                            <h3 className="flex items-center text-lg font-semibold text-white">
                                {e.title}
                            </h3>
                            <p className="block mb-3 text-sm font-normal leading-none text-gray-400">
                                {e.role}
                            </p>
                            <pre className="mb-4 text-base font-sans whitespace-pre-wrap font-normal text-gray-300">
                                {e.description}
                            </pre>

                            <a
                                href={e.link}
                                className="text-blue-300 underline break-all"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {e.link}
                            </a>

                            <div className="mt-4 flex flex-wrap">
                                {e.tech.map((tech) => (
                                    <div
                                        key={tech}
                                        className="mb-2 py-1 px-2 text-xs rounded-md mr-2 bg-gray-600 text-gray-2 text-white"
                                    >
                                        {tech}
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center space-x-2 mt-2 text-sm text-gray-400">
                                <IoCalendarNumberOutline size={16} />
                                <time>{e.date}</time>
                            </div>
                        </div>

                        {e.subItems && (
                            <ol className="mt-4 space-y-10 relative border-l border-gray-300 dark:border-gray-600">
                                {e.subItems?.map((subItem, i) => (
                                    <li key={i} className="p-1 ml-6">
                                        <span className="flex absolute -left-3.5 justify-center items-center w-7 h-7 bg-blue-200 rounded-full dark:bg-gray-700 dark:text-white text-black -mt-1">
                                            <PiBriefcaseMetal />
                                        </span>
                                        <h4 className="flex items-center font-semibold text-md text-gray-900 dark:text-white">
                                            {subItem.position}
                                        </h4>
                                        <time className="block mb-3 text-sm font-normal leading-none text-gray-700 dark:text-gray-400">
                                            {subItem.setup}
                                        </time>

                                        {subItem.projects?.map((project, i) => (
                                            <div className="mt-2" key={i}>
                                                <p className="mb-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                    {project.description}
                                                </p>
                                                <div className="-mt-2 flex flex-wrap">
                                                    {project.tech.map(
                                                        (tech) => (
                                                            <div
                                                                key={tech}
                                                                className="mb-2 py-1 px-2 text-xs rounded-md mr-2 bg-gray-800  text-white dark:text-gray-300"
                                                            >
                                                                {tech}
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        ))}

                                        <div className="flex items-center space-x-2 mt-2 text-sm text-gray-700 dark:text-gray-400">
                                            <IoCalendarNumberOutline
                                                size={16}
                                            />
                                            <time>{subItem.date}</time>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    );
};
