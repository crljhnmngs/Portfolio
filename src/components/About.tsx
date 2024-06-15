import React from 'react';
import Me from '../assets/images/me.png';

export default function About() {
    return (
        <section
            className="h-auto sm:h-screen bg-white dark:bg-gray-900"
            id="about"
        >
            <div className="sm:h-[15%] h-auto flex justify-center items-end">
                <p className="text-black font-semibold text-4xl dark:text-white mt-10 sm:mt-0">
                    About Me
                </p>
            </div>
            <div className="sm:h-[70%] h-auto flex px-7">
                <div className=" w-1/2 flex items-center justify-center">
                    <div className="border h-[26rem] w-[26rem] flex items-center justify-center bg-bg-image bg-contain">
                        <div className="h-96 w-96 rounded-[50%] overflow-hidden">
                            <img src={Me} alt="Me" className="object-contain" />
                        </div>
                    </div>
                </div>
                <div className=" w-1/2">About</div>
            </div>
        </section>
    );
}
