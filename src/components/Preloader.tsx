import React, { useEffect } from 'react';
import { preLoaderAnim } from '../animation';

export const Preloader = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            preLoaderAnim();
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex justify-center items-center bg-black h-full w-full loader preloader fixed bottom-0 left-0 right-0 z-[55]">
            <div className="m-auto sm:w-[120px] w-auto  sm:h-[80px] h-[50px] text-center font-[10px]">
                <div className="h-full w-[10px] sm:w-[15px] inline-block float-left ml-[2px] bg-[#754fa0] animate-delay"></div>
                <div
                    className="h-full w-[10px] sm:w-[15px] inline-block float-left ml-[2px] bg-[#09b7bf] animate-delay"
                    style={{ animationDelay: '-0.7s' }}
                ></div>
                <div
                    className="h-full w-[10px] sm:w-[15px] inline-block float-left ml-[2px] bg-[#90d36b] animate-delay"
                    style={{ animationDelay: '-0.6s' }}
                ></div>
                <div
                    className="h-full w-[10px] sm:w-[15px] inline-block float-left ml-[2px] bg-[#f2d40d] animate-delay"
                    style={{ animationDelay: '-0.5s' }}
                ></div>
                <div
                    className="h-full w-[10px] sm:w-[15px] inline-block float-left ml-[2px] bg-[#fcb12b] animate-delay"
                    style={{ animationDelay: '-0.4s' }}
                ></div>
                <div
                    className="h-full w-[10px] sm:w-[15px] inline-block float-left ml-[2px] bg-[#ed1b72] animate-delay"
                    style={{ animationDelay: '-0.3s' }}
                ></div>
            </div>
        </div>
    );
};
