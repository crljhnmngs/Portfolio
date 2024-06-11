import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import { useThemeSwitcher } from '../hook/useThemeSwitcher';
import { useActiveSetion } from '../hook/useActiveSetion';

export default function Header() {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [theme, setTheme] = useThemeSwitcher();
    const [sections, activeSection] = useActiveSetion();

    const scrollToSection =
        (id: string) => (event: React.MouseEvent<HTMLLIElement>) => {
            event.preventDefault();
            window.location.hash = id;
            setOpen(false);
        };

    const toggleDarkMode = () => {
        try {
            if (theme === 'light') {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        } catch (error) {
            console.log('Error switching theme');
        }
    };

    return (
        <nav className="bg-white dark:bg-gray-700 w-screen h-[70px] flex flex-row justify-between items-center nav:px-16 px-3 sticky top-0 drop-shadow-lg">
            <div>
                <h3 className="dark:text-white">Logo</h3>
            </div>
            <div className="flex gap-4 ">
                <div
                    className={`width-auto nav:static absolute drop-shadow-md  bg-white dark:bg-gray-700 nav:bg-transparent nav:dark:bg-inherit top-[115%] nav:p-0 p-3 rounded transition-all duration-500 ${
                        isOpen
                            ? 'right-6 animate-bounceRight'
                            : '-right-[10rem]'
                    }`}
                >
                    <ul className="flex nav:flex-row flex-col nav:gap-3 gap-1">
                        {sections.map((section) => (
                            <li
                                key={section.id}
                                className={`group hover:bg-blue-500 rounded-md px-4 py-2 cursor-pointer ${
                                    activeSection === section.id
                                        ? 'bg-blue-500'
                                        : ''
                                }`}
                                onClick={scrollToSection(`#${section.id}`)}
                            >
                                <a
                                    className={`group-hover:text-white text-black dark:text-white text-[15px] h-full font-semibold ${
                                        activeSection === section.id
                                            ? 'text-white'
                                            : ''
                                    }`}
                                    href={`#${section.id}`}
                                >
                                    {section.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center nav:gap-2 gap-1">
                    <div
                        className={`dark text-[11%] nav:text-[12%] dark:border dark:border-white border border-black relative h-[16em] w-[30em] rounded-[16em] cursor-pointer bg-[#423966] ${
                            theme === 'light' ? 'day' : ''
                        }`}
                        onClick={toggleDarkMode}
                    >
                        <div
                            className={`moon absolute block rounded-[50%] top-[3em] left-[3em] w-[10em] h-[10em] bg-[#423966] ${
                                theme === 'light' ? 'sun' : ''
                            }`}
                        ></div>
                    </div>
                    <div className="flex nav:hidden dark:text-white">
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
