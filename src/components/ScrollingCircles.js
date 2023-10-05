import React, { useState, useEffect } from 'react';
import '../style/scrollingCircles.css';

const ScrollingCircles = () => {
  const [circleColors, setCircleColors] = useState(['#EA5236', '#6799FB', '#559F58', '#FABD1D']);
  const [scrollColorIndex, setScrollColorIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newColorIndex = Math.floor(scrollPosition / 200) % 4;
      setScrollColorIndex(newColorIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scrolling-circles-container">
      <div className="circle full" style={{ background: circleColors[scrollColorIndex] }}></div>
      <div className="circle half left" style={{ background: circleColors[(scrollColorIndex + 1) % 4] }}></div>
      <div className="circle half right" style={{ background: circleColors[(scrollColorIndex + 2) % 4] }}></div>
    </div>
  );
};

export default ScrollingCircles;

