import React from 'react';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import LogoMVP from '../assets/images/mvp.webp';

export const Education = () => {
    const educations = [
        {
            logo: LogoMVP,
            school: 'University Of Cebu - Lapu-Lapu and Mandaue',
            track: 'College',
            course: 'Bachelor of Science in Information Technology',
            date: 'June 2018 - July 2022',
        },
        {
            logo: LogoMVP,
            school: 'University Of Cebu - Lapu-Lapu and Mandaue',
            track: 'Senior High School',
            course: 'TECH-VOC ICT - Computer Programming & Hardware Servicing ',
            date: 'June 2016 - April 2018',
        },
    ];

    return (
        <div>
            <ol className="relative border-l dark:border-gray-800">
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
                        <time className="block mb-3 text-sm font-normal leading-none text-gray-400">
                            {e.track}
                        </time>
                        <p className="mb-4 text-base font-normal text-gray-400">
                            {e.course}
                        </p>

                        <div className="flex items-center space-x-2 mt-2 text-sm text-gray-400">
                            <IoCalendarNumberOutline size={16} />
                            <time>{e.date}</time>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
};
