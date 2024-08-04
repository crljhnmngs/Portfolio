import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

type PopupProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
};

export function Popup({ children, delay, className }: PopupProps) {
    const ref = useRef(null);
    const isInview = useInView(ref);
    const controls = useAnimation();
    useEffect(() => {
        if (isInview) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [isInview, controls]);

    return (
        <motion.p
            ref={ref}
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
            }}
            transition={{
                duration: 0.2,
                damping: 8,
                delay: delay,
                stiffness: 100,
            }}
            initial="hidden"
            animate={controls}
            className={className}
        >
            {children}
        </motion.p>
    );
}
