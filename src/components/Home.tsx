import React from 'react';
import { ReactTyped } from 'react-typed';
import Facebook from '../assets/images/icons/facebook.png';
import Github from '../assets/images/icons/github.png';
import Linkedin from '../assets/images/icons/linkedin.png';
import Instagram from '../assets/images/icons/instagram.png';
import Twitter from '../assets/images/icons/twitter.png';
import Test from '../assets/images/test.png';

export default function Home() {
    return (
        <section
            className="sm:h-full h-auto bg-bg-light bg-cover bg-green-200 w-screen flex items-center justify-center sm:flex-row flex-col-reverse -scroll-mt-[-70px] gap-2 sm:gap-0"
            id="home"
        >
            <div className="h-[60%] home:max-w-[40%] w-full home:px-0 px-5 flex flex-col justify-center sm:items-start items-center">
                <div>
                    <p className="font-bold home:text-5xl sm:text-4xl text-3xl">
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
                        startDelay={3500}
                        loop
                        className="font-bold home:text-5xl sm:text-5xl text-3xl text-[#3B82F6] text-center home:text-start"
                    />
                </div>
                <div className="mt-6">
                    <p className="font-light home:text-lg sm:text:base text-sm text-center sm:text-start">
                        I am a Front-End / Full-Stack Developer. I am currently
                        working at Alliance Software Incorporated as a Software
                        Engineer.
                    </p>
                </div>
                <div className="mt-8 flex gap-5 item-start">
                    <a
                        href="https://github.com/crljhnmngs"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={Github}
                            alt="Github"
                            className="w-full h-full max-w-[45px] max-h-[45px] hover:scale-[1.18] "
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/crljhnmngs/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={Linkedin}
                            alt="Linkedin"
                            className="w-full h-full max-w-[45px] max-h-[45px] hover:scale-[1.18] "
                        />
                    </a>
                    <a
                        href="https://www.facebook.com/crljhnmngs"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={Facebook}
                            alt="Facebook"
                            className="w-full h-full max-w-[45px] max-h-[45px] hover:scale-[1.18] "
                        />
                    </a>
                    <a
                        href="https://instagram.com/crljhnmngs"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={Instagram}
                            alt="Instagram"
                            className="w-full h-full max-w-[45px] max-h-[45px] hover:scale-[1.18] "
                        />
                    </a>
                    <a
                        href="https://twitter.com/crljhnmngs"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={Twitter}
                            alt="Twitter"
                            className="w-full h-full max-w-[45px] max-h-[45px] hover:scale-[1.18] "
                        />
                    </a>
                </div>
                <div className="mt-8 w-1/2">
                    <button
                        type="button"
                        className="w-full home:w-[80%] text-white h-[60px] htext-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base  px-8 py-3 me-2 mb-2 focus:outline-none"
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
