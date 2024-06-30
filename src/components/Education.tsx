import React from 'react';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import UC from '../assets/images/UC.png';

export const Education = () => {
    const educations = [
        {
            logo: UC,
            school: 'University Of Cebu - Lapu-Lapu and Mandaue',
            track: 'College',
            course: 'Bachelor of Science in Information Technology',
            tech: [
                'C++',
                'Java',
                'C#',
                'Spring Boot',
                'J2EE',
                'NodeJS',
                'Python',
                'MySQL',
                'PHP',
                'Agile',
            ],
            date: 'June 2018 - July 2022',
        },
        {
            logo: UC,
            school: 'University Of Cebu - Lapu-Lapu and Mandaue',
            track: 'Senior High School',
            course: 'TECH-VOC ICT - Computer Programming & Hardware Servicing ',
            tech: ['Java', 'C#'],
            date: 'June 2016 - April 2018',
        },
    ];

    return (
        <div className="-mt-3">
            <ol className="relative border-l border-gray-300 dark:border-gray-600">
                {educations.map((e, i) => (
                    <li key={i} className="p-1 mb-10 ml-6">
                        <span className="flex absolute -left-3.5 justify-center items-center w-7 h-7 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <img
                                src={e.logo}
                                alt={e.school}
                                className="w-full h-full rounded-full"
                            />
                        </span>
                        <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                            {e.school}
                        </h3>
                        <time className="block mb-3 text-sm font-normal leading-none text-gray-700 dark:text-gray-400">
                            {e.track}
                        </time>
                        <p className="mb-4 text-base font-normal text-gray-700 dark:text-gray-400">
                            {e.course}
                        </p>
                        <div className="-mt-2 flex flex-wrap">
                            {e.tech.map((tech) => (
                                <div
                                    key={tech}
                                    className="mb-2 py-1 px-2 text-xs rounded-md mr-2 bg-gray-800  text-white dark:text-gray-300"
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center space-x-2 mt-2 text-sm text-gray-700 dark:text-gray-400">
                            <IoCalendarNumberOutline size={16} />
                            <time>{e.date}</time>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
};
