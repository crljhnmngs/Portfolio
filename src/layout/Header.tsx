import React, { useState, useEffect, useRef, useMemo } from 'react';
import Hamburger from 'hamburger-react';
import { useThemeSwitcher } from '../hook/useThemeSwitcher';

export default function Header() {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>('home');
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
    const [theme, setTheme] = useThemeSwitcher();

    const scrollToSection =
        (id: string) => (event: React.MouseEvent<HTMLLIElement>) => {
            event.preventDefault();
            window.location.hash = id;
            setOpen(false);
        };

    const sections = useMemo(
        () => [
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'experiences', label: 'Experiences' },
            { id: 'skills', label: 'Skills' },
            { id: 'contact', label: 'Contact' },
        ],
        []
    );

    useEffect(() => {
        const handleScroll = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleScroll, {
            root: null,
            rootMargin: '0px',
            threshold: 0.6,
        });

        const currentSectionRefs = { ...sectionRefs.current };

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) {
                currentSectionRefs[section.id] = element;
                observer.observe(element);
            }
        });

        return () => {
            Object.values(currentSectionRefs).forEach((element) => {
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [sections]);

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
                    <div className={`dark text-[12%] nav:text-[13%] dark:border dark:border-white border border-black relative h-[16em] w-[30em] rounded-[16em] cursor-pointer bg-[#423966] ${theme === 'light' ? 'day' : ''}`} onClick={toggleDarkMode}>
                        <div className={`moon absolute block rounded-[50%] top-[3em] left-[3em] w-[10em] h-[10em] bg-[#423966] ${theme === 'light' ? 'sun' : ''}`}>
                        </div>
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
