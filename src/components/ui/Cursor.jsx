import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCursor } from '../../context/CursorContext';
import './Cursor.css';

const Cursor = () => {
    const { cursorType, cursorText } = useCursor();
    const [isTouch, setIsTouch] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Main cursor spring
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    // Trail spring (softer/laggy)
    const trailSpringConfig = { damping: 20, stiffness: 200 };
    const trailXSpring = useSpring(cursorX, trailSpringConfig);
    const trailYSpring = useSpring(cursorY, trailSpringConfig);

    useEffect(() => {
        const checkTouch = () => {
            setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
        };
        checkTouch();
        window.addEventListener('resize', checkTouch);

        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('resize', checkTouch);
        };
    }, [cursorX, cursorY]);

    if (isTouch) return null;

    const variants = {
        default: {
            width: 32,
            height: 32,
            backgroundColor: 'transparent',
            border: '1px solid var(--color-accent)',
            boxShadow: '0 0 10px rgba(0, 243, 255, 0.3)',
        },
        hover: {
            width: 64,
            height: 64,
            backgroundColor: 'rgba(0, 243, 255, 0.1)',
            border: '1px solid var(--color-accent)',
            boxShadow: '0 0 20px rgba(0, 243, 255, 0.5)',
            opacity: 1,
        },
        text: {
            width: 8,
            height: 8,
            backgroundColor: 'var(--color-accent)',
            border: 'none',
            boxShadow: '0 0 15px var(--color-accent), 0 0 5px var(--color-accent)',
        },
    };

    return (
        <>
            {/* Trail */}
            <motion.div
                className="cursor-trail"
                style={{
                    translateX: trailXSpring,
                    translateY: trailYSpring,
                    x: 8, // Offset to center with cursor
                    y: 8
                }}
            />

            {/* Main Cursor */}
            <motion.div
                aria-hidden="true"
                className="custom-cursor"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                }}
                variants={variants}
                animate={cursorType}
                transition={{ type: 'spring', stiffness: 500, damping: 28 }}
            >
                {cursorText && <span className="cursor-text">{cursorText}</span>}
            </motion.div>
        </>
    );
};

export default Cursor;
