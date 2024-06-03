import React, { useState, useEffect, useRef } from 'react';
import SunIcon from '../assets/images/icons/sun.png';
import Hamburger from 'hamburger-react';

export default function Header() {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>('home');
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const scrollToSection = (id: string) => (event: React.MouseEvent<HTMLLIElement>) => {
        event.preventDefault();
        window.location.hash = id;
        setOpen(false);
    };

    const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];
  
  useEffect(() => {
        const handleScroll = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleScroll, {
            root: null,
            rootMargin: '0px',
            threshold: 0.6
        });

        sections.forEach(section => {
            const element = document.getElementById(section.id);
            if (element) {
                sectionRefs.current[section.id] = element;
                observer.observe(element);
            }
        });

        return () => {
            Object.values(sectionRefs.current).forEach(element => {
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [sections]);

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
                      {sections.map(section => (
                            <li
                                key={section.id}
                                className={`group hover:bg-blue-500 rounded-md px-4 py-2 cursor-pointer ${
                                    activeSection === section.id ? 'bg-blue-500' : ''
                                }`}
                                onClick={scrollToSection(`#${section.id}`)}
                            >
                                <a
                                    className={`group-hover:text-white text-black text-[15px] h-full font-semibold ${
                                        activeSection === section.id ? 'text-white' : ''
                                    }`}
                                    href={`#${section.id}`}
                                >
                                    {section.label}
                                </a>
                            </li>
                        ))}
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