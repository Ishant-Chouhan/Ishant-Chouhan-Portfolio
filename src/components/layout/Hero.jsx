import { motion } from 'framer-motion';
import { useCursor } from '../../context/CursorContext';
import Parallax from '../ui/Parallax';
import './Hero.css';

// Staggered letter animation
const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.05, delayChildren: 0.3 * i }
    })
};

const child = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    },
    hidden: {
        opacity: 0,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const AnimatedText = ({ text, className, i, onMouseEnter, onMouseLeave }) => {
    return (
        <motion.div
            className={`overflow-hidden flex ${className}`}
            variants={container}
            initial="hidden"
            animate="visible"
            custom={i}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {text.split("").map((letter, index) => (
                <motion.span variants={child} key={index} className="inline-block">
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.div>
    );
};

const Hero = () => {
    const { setCursorType } = useCursor();

    const handleMouseEnter = () => setCursorType('text');
    const handleMouseLeave = () => setCursorType('default');

    return (
        <section className="hero" id="work">
            <div className="hero-content">
                <AnimatedText text="Ishant" className="hero-title" i={1} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
                <AnimatedText text="Chouhan" className="hero-title outline-text" i={2} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
                <AnimatedText text="AI/ML Engineer" className="hero-subtitle" i={3} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />

                <div className="hero-description">
                    <Parallax offset={-30}>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 1 }}
                        >
                            Building intelligent systems with Deep Learning, LLMs, and Data Science.
                        </motion.p>
                    </Parallax>
                </div>
            </div>

            <div className="scroll-indicator">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.5 }}
                >
                    ↓
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
