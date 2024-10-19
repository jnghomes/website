// components/CustomCursor.js
import { useRef, useEffect, useState } from 'react';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${x}px`;
        cursorRef.current.style.top = `${y}px`;
      }
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  useEffect(() => {
    const handleHover = (e) => {
      // Check if the hovered element is a link, button, or has a "hover-target" class
      if (e.target.closest('a, button, .hover-target')) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mouseover', handleHover);
    window.addEventListener('mouseout', handleHover);

    return () => {
      window.removeEventListener('mouseover', handleHover);
      window.removeEventListener('mouseout', handleHover);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`${styles.cursor} ${hovered ? styles.hovered : ''}`}
    />
  );
};

export default CustomCursor;