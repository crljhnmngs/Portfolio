import React from 'react';
import { Popup } from '../animation/Popup';
import { SlideLeft } from '../animation/Slide';
import { Experiences } from './Experiences';
import { Education } from './Education';

export default function Timeline() {
    return (
        <section
            className="h-auto bg-white dark:bg-gray-900 border border-transparent flex max-screen:justify-center"
            id="timeline"
        >
            <div className="w-full max-screen:max-w-maxDesktop">
                <div className="h-auto flex justify-center items-end pt-10">
                    <Popup
                        delay={0.5}
                        className="text-black font-semibold text-3xl sm:text-4xl dark:text-white"
                    >
                        Timeline
                    </Popup>
                </div>
                <div className="w-full mt-4 px-7 sm:px-10 md:px-20 sm:mt-10">
                    <div className="h-auto w-full">
                        <SlideLeft delay={0.5}>
                            <h3 className="mb-8 text-xl font-semibold text-black dark:text-white">
                                Work Experience
                            </h3>
                        </SlideLeft>
                        <Experiences></Experiences>
                        <SlideLeft delay={0.5} className="mt-16">
                            <h3 className="mb-8 text-xl font-semibold text-black dark:text-white">
                                Education
                            </h3>
                        </SlideLeft>
                        <Education></Education>
                    </div>
                </div>
            </div>
        </section>
    );
}
