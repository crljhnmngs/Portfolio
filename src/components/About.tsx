import React from 'react';
import Me from '../assets/images/me.png';

export default function About() {
    return (
        <section
            className="h-auto about:h-screen bg-white dark:bg-gray-900"
            id="about"
        >
            <div className="sm:h-[13%] h-auto flex justify-center items-end pt-5 home:pt-0">
                <p className="text-black font-semibold text-3xl sm:text-4xl dark:text-white">
                    About Me
                </p>
            </div>
            <div className="sm:h-[70%] h-auto flex flex-col about:flex-row px-7 justify-center items-center">
                <div className="min-w-1/2 flex items-start justify-center -mt-5 about:-mt-5">
                    <div className="size-[280px] sm:size-[26rem] about:size-[31rem] flex items-start pt-3 justify-center bg-bg-image">
                        <div className="size-[14.5rem] sm:size-[22rem] about:size-[25.5rem] rounded-[50%] overflow-hidden mr-3 sm:mr-4 about:mr-6 mt-1 about:mt-5">
                            <img src={Me} alt="Me" className="size-full mt-2" />
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-[80%] home:w-1/2 h-auto about:h-full pt-0 flex items-center">
                    <p className="text-black text-base dark:text-white text-center about:text-start">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos molestias excepturi accusamus accusantium beatae
                        impedit veritatis eos reprehenderit tenetur natus,
                        quaerat, libero dolore nemo placeat optio eius
                        necessitatibus inventore sapiente et ratione ducimus
                        illum quas. Voluptatem voluptates laudantium eius. Harum
                        quas fuga veniam hic. Nemo voluptates fugit eligendi,
                        eius, minima reiciendis temporibus minus odit
                        voluptatibus sapiente et, delectus quidem? Aperiam
                        suscipit itaque labore quod perspiciatis dolorum
                        corporis, vero id, sed delectus nobis officia quae,
                        deserunt tenetur repudiandae facilis quibusdam placeat
                        maiores repellat nisi expedita praesentium. Soluta
                        aliquam, temporibus hic, eveniet natus aperiam eum
                        autem, ipsum impedit similique non! Doloremque, veniam?
                    </p>
                </div>
            </div>
        </section>
    );
}
