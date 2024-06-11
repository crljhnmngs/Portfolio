import { useState, useEffect, useRef, useMemo } from 'react';

interface Section {
    id: string;
    label: string;
}

export function useActiveSetion(): [Section[], string] {
    const [activeSection, setActiveSection] = useState<string>('home');
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

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

    return [sections, activeSection];
}
