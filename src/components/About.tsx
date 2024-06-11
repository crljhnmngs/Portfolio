import React from 'react';

export default function About() {
    return (
        <section
            className="h-auto sm:h-full bg-white dark:bg-gray-900 w-screen -scroll-mt-[-70px]"
            id="about"
        >
            <div className="h-[15%] flex justify-center items-end">
                <p className="text-black font-semibold text-4xl dark:text-white">
                    About Me
                </p>
            </div>
        </section>
    );
}
