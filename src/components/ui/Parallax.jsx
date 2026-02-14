import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = ({ children, offset = 50, className = '' }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

    return (
        <div ref={ref} className={className}>
            {/* Overflow hidden is usually needed for parallax containers to avoid scrollbar jitter, but depends on usage. 
          Actually, standard parallax just moves the element. wrapping in div might help with positioning reference. 
      */}
            <motion.div style={{ y }}>
                {children}
            </motion.div>
        </div>
    );
};

// Alternative: just a hook or simpler component if we don't want wrapper div
// But wrapper is good for measuring visibility.

export default Parallax;
