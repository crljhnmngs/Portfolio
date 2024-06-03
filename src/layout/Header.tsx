import React, { useState } from 'react';
import SunIcon from '../assets/images/icons/sun.png';
import Hamburger from 'hamburger-react';

export default function Header() {
    const [isOpen, setOpen] = useState<boolean>(false);

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <nav className="bg-white w-screen h-[10%] flex flex-row justify-between items-center nav:px-16 px-3 sticky top-0">
            <div>
                <h3>Logo</h3>
            </div>
            <div className="flex gap-4">
                <div
                    className={`width-auto nav:static absolute top-[115%] bg-white nav:p-0 p-3 rounded transition-all duration-500 ${
                        isOpen
                            ? 'right-6 animate-bounceRight'
                            : '-right-[10rem]'
                    }`}
                >
                    <ul className="flex nav:flex-row flex-col nav:gap-3 gap-1">
                        <li
                            className="group hover:bg-blue-500 rounded-md px-4 py-2"
                            onClick={closeMenu}
                        >
                            <a
                                className="group-hover:text-white text-black text-[15px] font-semibold"
                                href={'/#home'}
                            >
                                Home
                            </a>
                        </li>
                        <li
                            className="group hover:bg-blue-500 rounded-md px-4 py-2"
                            onClick={closeMenu}
                        >
                            <a
                                className="group-hover:text-white text-black text-[15px] font-semibold"
                                href={'#about'}
                            >
                                About
                            </a>
                        </li>
                        <li
                            className="group hover:bg-blue-500 rounded-md px-4 py-2"
                            onClick={closeMenu}
                        >
                            <a
                                className="group-hover:text-white text-black text-[15px] font-semibold"
                                href={'#experiences'}
                            >
                                Experiences
                            </a>
                        </li>
                        <li
                            className="group hover:bg-blue-500 rounded-md px-4 py-2"
                            onClick={closeMenu}
                        >
                            <a
                                className="group-hover:text-white text-black text-[15px] font-semibold"
                                href={'#skills'}
                            >
                                Skills
                            </a>
                        </li>
                        <li
                            className="group hover:bg-blue-500 rounded-md px-4 py-2"
                            onClick={closeMenu}
                        >
                            <a
                                className="group-hover:text-white text-black text-[15px] font-semibold"
                                href={'#projects'}
                            >
                                Projects
                            </a>
                        </li>
                        <li
                            className="group hover:bg-blue-500 rounded-md px-4 py-2"
                            onClick={closeMenu}
                        >
                            <a
                                className="group-hover:text-white text-black text-[15px] font-semibold"
                                href={'#contact'}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-3">
                    <div>
                        <img
                            src={SunIcon}
                            alt="placeholder"
                            className="cursor-pointer h-7 w-7"
                        />
                    </div>
                    <div className="flex nav:hidden">
                        <Hamburger
                            toggled={isOpen}
                            toggle={setOpen}
                            duration={0.9}
                            size={22}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}