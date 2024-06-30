import React from 'react';
import { Popup } from '../animation/Popup';
import { SlideLeft } from '../animation/Slide';

export default function Contact() {
    return (
        <section className="h-screen bg-white dark:bg-gray-900" id="contact">
            <div className="h-20 flex justify-center items-end">
                <Popup
                    delay={0.5}
                    className="text-black font-semibold text-3xl sm:text-4xl dark:text-white"
                >
                    Contact
                </Popup>
            </div>
            <div className="mt-10 mx-44 border">
                <div className="w-1/2">
                    <SlideLeft delay={0.5}>
                        <h3 className="mb-3 text-3xl font-semibold text-blue-500">
                            Connect with me{' '}
                        </h3>
                    </SlideLeft>
                    <SlideLeft delay={0.7}>
                        <p className="text-gray-600 dark:text-gray-300 text-xl">
                            If you want to know more about me or my work, or if
                            you would just like to say hello, send me a message.
                            I'd love to hear from you.
                        </p>
                    </SlideLeft>
                </div>
            </div>
        </section>
    );
}
