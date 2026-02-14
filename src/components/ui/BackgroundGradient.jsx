import { motion } from 'framer-motion';
import './BackgroundGradient.css';

const BackgroundGradient = () => {
    return (
        <div className="background-gradient-container">
            <motion.div
                className="gradient-blob"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
};

export default BackgroundGradient;
