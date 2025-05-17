import React from 'react';
import Me from '../assets/images/me.webp';
import moment from 'moment';
import { SlideLeft, SlideRight } from '../animation/Slide';
import { Popup } from '../animation/Popup';
import ImageWithFallback from '../utils/ImageWithFallback';

export default function About() {
    const age = moment().diff(import.meta.env.VITE_DATEOFBIRTH, 'years');
    const yearsOfExperience = moment().diff(
        import.meta.env.VITE_YEARSOFEXPERIENCE,
        'years',
        true
    );
    let experience = '';
    if (yearsOfExperience % 1 >= 0.8) {
        experience = ` with nearly ${
            Math.floor(yearsOfExperience) + 1
        } years of professional experience`;
    } else {
        experience = ` with ${Math.floor(
            yearsOfExperience
        )}+ years of professional experience`;
    }
    return (
        <section
            className="commonMaxHeight:h-auto desktopMaxHeight:h-maxDesktop h-auto about:h-screen w-screen bg-white dark:bg-gray-900 flex max-screen:justify-center"
            id="about"
        >
            <div className="h-full w-full max-screen:max-w-maxDesktop">
                <div className="sm:h-[13%] h-auto flex justify-center items-end pt-10  home:pt-5">
                    <Popup
                        delay={0.6}
                        className="text-black font-semibold text-3xl sm:text-4xl dark:text-white"
                    >
                        About Me
                    </Popup>
                </div>
                <div className="sm:h-[70%] h-auto flex flex-col about:flex-row px-7 justify-center items-center">
                    <SlideLeft
                        className="min-w-1/2 flex items-start justify-center -mt-5 about:-mt-5"
                        delay={0.5}
                    >
                        <div className="size-[280px] sm:size-[26rem] about:size-[31rem] flex items-start pt-3 justify-center bg-bg-image">
                            <div className="size-[14.5rem] sm:size-[22rem] about:size-[25.5rem] rounded-[50%] overflow-hidden mr-3 sm:mr-4 about:mr-6 mt-1 about:mt-5">
                                <ImageWithFallback
                                    src={Me}
                                    alt="Me"
                                    loaderColor="white"
                                    className="size-full mt-2"
                                />
                            </div>
                        </div>
                    </SlideLeft>
                    <SlideRight
                        className="w-full sm:w-[80%] home:w-1/2 h-auto about:h-full pt-0 flex items-center"
                        delay={0.5}
                    >
                        <p className="text-black text-base dark:text-white text-justify pb-6 leading-relaxed">
                            Hello there! I'm Carl, a {age}-year-old Front-End /
                            Full-Stack Web Developer based in Cebu, Philippines,
                            {experience}. <br></br> My journey with computers
                            started early in life, sparking a passion that has
                            only grown stronger over the years.
                            <br></br> <br></br> I am highly committed to
                            continuous learning and driven by a passion for
                            mastering new technologies and solving complex
                            challenges. With a strong foundation in clean
                            architecture and both frontend and backend web
                            development, I excel at designing and delivering
                            scalable, maintainable solutions. Known for
                            adaptability, quick learning, and a collaborative
                            mindset, I thrive in dynamic tech environments, lead
                            teams effectively, and consistently ensure
                            high-quality software delivery.
                            <br></br> <br></br>
                            Beyond coding, I find joy in online gaming and
                            indulge in the world of anime and TV series during
                            my downtime.
                        </p>
                    </SlideRight>
                </div>
            </div>
        </section>
    );
}
