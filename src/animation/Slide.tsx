import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

type SlideProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
};

export function SlideRight({ children, delay, className }: SlideProps) {
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
        <motion.div
            ref={ref}
            variants={{
                hidden: { opacity: 0, translateX: 90 },
                visible: { opacity: 1, translateX: 0 },
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
        </motion.div>
    );
}

export function SlideLeft({ children, delay, className }: SlideProps) {
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
        <motion.div
            ref={ref}
            variants={{
                hidden: { opacity: 0, translateX: -90 },
                visible: { opacity: 1, translateX: 0 },
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
        </motion.div>
    );
}
