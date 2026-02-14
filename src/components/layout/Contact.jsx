import { motion } from 'framer-motion';
import Magnetic from '../ui/Magnetic';
import { useCursor } from '../../context/CursorContext';
import './Contact.css';

const Contact = () => {
    const { setCursorType, setCursorText } = useCursor();

    const handleMouseEnter = () => {
        setCursorType('hover');
        setCursorText('Email');
    };

    const handleMouseLeave = () => {
        setCursorType('default');
        setCursorText('');
    };

    return (
        <section className="contact-section" id="contact">
            <motion.div
                className="contact-container"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <h2 className="contact-heading">Let's work together</h2>
                <Magnetic>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=ishantchouhan666@gmail.com&su=Project%20Inquiry"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-button"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        ishantchouhan666@gmail.com
                    </a>
                </Magnetic>
                <div className="social-links">
                    <a href="tel:+919340468387" className="phone-link">+91 9340468387</a>
                    <a href="https://github.com/Ishant-Chouhan" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/ishantchouhan" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
