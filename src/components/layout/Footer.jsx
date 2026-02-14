import { useRef } from 'react';
import { useCursor } from '../../context/CursorContext';
import './Footer.css';

const Footer = () => {
    const { setCursorType } = useCursor();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <div className="socials">
                        <a
                            href="https://github.com/Ishant-Chouhan"
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => setCursorType('hover')}
                            onMouseLeave={() => setCursorType('default')}
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/ishantchouhan"
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => setCursorType('hover')}
                            onMouseLeave={() => setCursorType('default')}
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=ishantchouhan666@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => setCursorType('hover')}
                            onMouseLeave={() => setCursorType('default')}
                        >
                            Email
                        </a>
                    </div>
                    <div className="copyright">
                        <span>&copy; {new Date().getFullYear()} Ishant Chouhan</span>
                        <span className="location">Subhash Colony, Ashoka Garden, Bhopal, Madhya Pradesh</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
