// app/components/CustomCursor.js
"use client"; // Ensure this is a client component

import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false); // State to track if hovered

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${hovered ? 'hovered' : ''}`} // Apply class based on hover state
      style={{
        left: `${cursor.x}px`,
        top: `${cursor.y}px`,
      }}
    />
  );
};

export default CustomCursor;
