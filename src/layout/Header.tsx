import React, { useState, useMemo } from 'react';
import Hamburger from 'hamburger-react';
import { useThemeSwitcher } from '../hook/useThemeSwitcher';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { sections } from '../const';
import { SettingsToggle } from '../components/SettingsToggle';

export default function Header() {
    const [isOpen, setOpen] = useState<boolean>(false);

    const memoizedData = useMemo(() => {
        return sections;
    }, []);

    return (
        <React.Fragment>
            <nav className="bg-white dark:bg-gray-700 sticky z-50 w-full h-[70px] flex max-screen:justify-center top-0 nav:px-16 px-5 shadow-lg">
                <div className="w-full max-screen:max-w-maxDesktop h-full flex flex-row justify-between items-center ">
                    <div>
                        <Link
                            to="/"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            className={'dark:text-white cursor-pointer'}
                        >
                            CrlJhnMngs
                        </Link>
                    </div>
                    <div className="nav:flex gap-4 mt-1 ">
                        <div className={`width-auto hidden nav:flex w-full`}>
                            <ul className="flex nav:flex-row flex-col items-center nav:gap-3 gap-1">
                                {memoizedData.map((section) => (
                                    <li
                                        key={section.name}
                                        className=" cursor-pointer "
                                    >
                                        <Link
                                            to={section.id}
                                            activeClass={
                                                'text-white bg-blue-500'
                                            }
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            className={
                                                'hover:text-white px-4 py-2 text-black hover:bg-blue-500 dark:text-white text-[15px] rounded-md'
                                            }
                                        >
                                            {section.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex items-center nav:gap-2 gap-1">
                            <div>
                                <SettingsToggle />
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
                </div>
            </nav>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: 100 }}
                        animate={{ x: 0, transition: { type: 'spring' } }}
                        exit={{ x: 200, transition: { type: 'spring' } }}
                        className={
                            'bg-white nav:hidden dark:bg-gray-700 p-2 z-50 fixed top-[70px] mt-2 rounded-lg shadow-lg right-2 block w-40 h-auto'
                        }
                    >
                        <ul className="flex flex-col gap-2 text-md font-medium">
                            {sections.map((section) => (
                                <Link
                                    key={section.name}
                                    to={section.id}
                                    activeClass={'text-white bg-blue-500'}
                                    className={
                                        'text-black dark:text-white block px-3 py-2 rounded-md text-base font-medium mt-1 hover:bg-blue-500 hover:text-white cursor-pointer'
                                    }
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    onClick={() => setOpen(false)}
                                >
                                    <li>{section.name}</li>
                                </Link>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </React.Fragment>
    );
}
