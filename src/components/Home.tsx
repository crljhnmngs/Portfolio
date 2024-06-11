import React from 'react';
import { ReactTyped } from 'react-typed';
import Test from '../assets/images/test.png';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

export default function Home() {
    return (
        <section
            className="sm:h-full h-auto bg-bg-light dark:bg-bg-dark bg-cover bg-green-200 w-screen flex items-center justify-center sm:flex-row flex-col-reverse -scroll-mt-[-70px] gap-2 sm:gap-0"
            id="home"
        >
            <div className="h-[60%] home:max-w-[40%] w-full home:px-0 px-5 flex flex-col justify-center sm:items-start items-center">
                <div>
                    <p className="font-bold home:text-5xl sm:text-4xl text-3xl text-black dark:text-white sm:dark:text-white">
                        Hi, I am Carl
                    </p>
                </div>
                <div>
                    <ReactTyped
                        strings={[
                            'Software Engineer',
                            'Front End Developer',
                            'Full Stack Developer',
                        ]}
                        typeSpeed={50}
                        backSpeed={60}
                        loop
                        className="font-bold home:text-5xl sm:text-5xl text-3xl text-[#3B82F6] text-center home:text-start"
                    />
                </div>
                <div className="mt-6">
                    <p className="font-light home:text-lg sm:text:base text-sm text-center sm:text-start dark:sm:text-white dark:text-black">
                        I am a Front-End / Full-Stack Developer. I am currently
                        working at Alliance Software Incorporated as a Software
                        Engineer.
                    </p>
                </div>
                <div className="mt-8 flex gap-5 h-11 item-start">
                    <a
                        href="https://github.com/crljhnmngs"
                        target="_blank"
                        rel="noreferrer"
                        className="h-11"
                    >
                        <FaGithub className="w-full h-11 hover:scale-[1.18]" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/crljhnmngs/"
                        target="_blank"
                        rel="noreferrer"
                        className="h-11"
                    >
                        <FaLinkedin className="w-full h-11 hover:scale-[1.18]" />
                    </a>
                    <a
                        href="https://www.facebook.com/crljhnmngs"
                        target="_blank"
                        rel="noreferrer"
                        className="h-11"
                    >
                        <FaFacebook className="w-full h-11 hover:scale-[1.18]" />
                    </a>
                    <a
                        href="https://instagram.com/crljhnmngs"
                        target="_blank"
                        rel="noreferrer"
                        className="h-11"
                    >
                        <FaInstagram className="w-full h-11 hover:scale-[1.18]" />
                    </a>
                    <a
                        href="https://twitter.com/crljhnmngs"
                        target="_blank"
                        rel="noreferrer"
                        className="h-11"
                    >
                        <FaSquareXTwitter className="w-full h-11 hover:scale-[1.18]" />
                    </a>
                </div>
                <div className="mt-8 w-1/2">
                    <button
                        type="button"
                        className="w-full home:w-[80%] text-white h-[60px] htext-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base  px-8 py-3 me-2 mb-2 focus:outline-none mb-7"
                    >
                        Resume
                    </button>
                </div>
            </div>
            <div className="h-[60%]  home:w-[40%] w-full flex justify-center items-start">
                <img
                    src={Test}
                    alt="placeholder"
                    className="w-full h-[80%] max-h-[350px] sm:h-full sm:max-h-full"
                />
            </div>
        </section>
    );
}
