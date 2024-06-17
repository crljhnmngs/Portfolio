import React from 'react';
import { Popup } from '../animation/Popup';

export default function Skills() {
    return (
        <section className="h-screen bg-gray-100 dark:bg-black" id="skills">
            <div className="sm:h-[13%] h-auto flex justify-center items-end pt-5 home:pt-0">
                <Popup
                    delay={0.8}
                    className="text-black font-semibold text-3xl sm:text-4xl dark:text-white"
                >
                    My Skills
                </Popup>
            </div>
        </section>
    );
}
