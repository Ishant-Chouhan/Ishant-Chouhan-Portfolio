import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useCursor } from '../../context/CursorContext';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
    const { setCursorType, setCursorText } = useCursor();
    const ref = useRef(null);

    // 3D Tilt Effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseEnter = () => {
        setCursorType('hover');
        setCursorText('View');
    };

    const handleMouseLeave = () => {
        setCursorType('default');
        setCursorText('');
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-10%" }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000,
            }}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="project-card-inner"
            >
                <div className="project-image-container">
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        loading="lazy"
                    />
                </div>
                <div className="project-info" style={{ transform: "translateZ(20px)" }}>
                    <div className="project-header">
                        <h3 className="project-title">{project.title}</h3>
                        <span className="project-year">{project.year}</span>
                    </div>
                    <span className="project-category">{project.category}</span>
                    {project.description && <p className="project-description">{project.description}</p>}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;
