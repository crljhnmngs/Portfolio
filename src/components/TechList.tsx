import { useState, useRef, useEffect, useCallback } from 'react';

export const TechList = ({ techs }: { techs: string[] }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [visibleTechs, setVisibleTechs] = useState<string[]>(techs);

    const checkOverflow = useCallback(() => {
        const container = containerRef.current;
        if (!container) return;

        const children = Array.from(container.children) as HTMLDivElement[];
        let lastVisibleIndex = techs.length;

        for (let i = 0; i < children.length; i++) {
            if (
                children[i].getBoundingClientRect().right >
                container.getBoundingClientRect().right
            ) {
                lastVisibleIndex = i;
                break;
            }
        }

        setVisibleTechs(
            lastVisibleIndex < techs.length
                ? [...techs.slice(0, lastVisibleIndex), '...']
                : techs
        );
    }, [techs]);

    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            requestAnimationFrame(checkOverflow);
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => resizeObserver.disconnect();
    }, [checkOverflow]);

    return (
        <div
            ref={containerRef}
            className="mt-1 xl:mt-3 overflow-hidden flex w-full"
        >
            {visibleTechs.map((tech, index) => (
                <div
                    key={index}
                    className="mb-2 py-2 px-2 xl:px-3 text-xs rounded-md mr-2 whitespace-nowrap bg-gray-800 text-white dark:text-gray-300"
                >
                    {tech}
                </div>
            ))}
        </div>
    );
};
