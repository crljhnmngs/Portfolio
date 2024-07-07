import React, { useMemo } from 'react';
import { ReactTyped } from 'react-typed';
import ReactLottie from 'lottie-react';
import codingAnimation from '../json/coding.json';
import { SlideLeft, SlideRight } from '../animation/Slide';
import { socials } from '../const';

export default function Home() {
    const memoizedData = useMemo(() => {
        return socials;
    }, []);

    return (
        <section
            className="h-screen sm:h-auto home:h-screen bg-bg-light dark:bg-bg-dark bg-cover bg-green-200 flex sm:items-center items-center justify-center sm:gap-0 home:gap-2 sm:flex-col home:flex-row"
            id="/"
        >
            <SlideLeft
                className="h-auto sm:h-[433px] home:h-auto home:max-w-[40%] w-full home:px-0 px-5 flex flex-col justify-center sm:items-center items-start home:items-start"
                delay={0.5}
            >
                <div>
                    <p className="font-bold home:text-5xl sm:text-4xl text-3xl text-black dark:text-white sm:dark:text-white">
                        Hi, I am Carl
                    </p>
                </div>
                <div className="mt-1">
                    <ReactTyped
                        strings={[
                            'Software Engineer',
                            'Front End Developer',
                            'Full Stack Developer',
                        ]}
                        typeSpeed={50}
                        backSpeed={60}
                        loop
                        className="font-bold home:text-5xl sm:text-4xl text-3xl text-[#3B82F6] text-start sm:text-center home:text-start"
                    />
                </div>
                <div className="mt-6 w-full sm:w-1/2  home:w-[80%]">
                    <p className="font-light home:text-lg sm:text:base text-sm text-start sm:text-center home:text-start dark:sm:text-white dark:text-white">
                        I am a Front-End / Full-Stack Developer. I am currently
                        working at Alliance Software Incorporated as a Software
                        Engineer.
                    </p>
                </div>
                <div className="mt-8 flex gap-4 h-11 sm:h-[3.2rem] justify-start sm:justify-center home:justify-start w-[100%] sm:dark:text-white home:dark:text-black">
                    {memoizedData.map((social) => (
                        <div
                            className="w-full h-full max-w-14"
                            key={social.name}
                        >
                            <a
                                href={social.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {social.icon}
                            </a>
                        </div>
                    ))}
                </div>
                <div className="mt-8 flex w-full justify-start sm:justify-center home:justify-start">
                    <button
                        type="button"
                        className=" home:w-[80%] w-[50%] max-w-56 h-[60px] text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-8 py-3 me-2 focus:outline-none"
                    >
                        Resume
                    </button>
                </div>
            </SlideLeft>
            <SlideRight
                className="sm:h-[433px] home:h-[60%] home:w-[40%] w-full justify-center items-start hidden sm:flex"
                delay={0.5}
            >
                <ReactLottie
                    animationData={codingAnimation}
                    className="w-full h-[120%] animate-float -mt-14"
                    loop={true}
                />
            </SlideRight>
        </section>
    );
}
