import React, { useState, useEffect } from 'react';

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
    <div className="fixed mb-2.5 mr-2.5 flex flex-row-reverse justify-end items-end z-999">
      <div className="w-features h-scrolling rounded-scrolling mb-scrolling-bottom mr-scrolling-right ease-in-out transition duration-0.3 w-fullcircle h-fullcircle" style={{ background: circleColors[scrollColorIndex] }}></div>
      <div className="w-features h-scrolling mb-scrolling-bottom mr-scrolling-right ease-in-out transition duration-0.3 h-half w-half rounded-scrolling ml-0 mr-left-right mb-left-bottom" style={{ background: circleColors[(scrollColorIndex + 1) % 4] }}></div>
      <div className="w-features h-scrolling mb-scrolling-bottom mr-scrolling-right ease-in-out transition duration-0.3 h-half w-half rounded-scrolling mr-right-right mb-right-bottom" style={{ background: circleColors[(scrollColorIndex + 2) % 4] }}></div>
    </div>
  );
};

export default ScrollingCircles;

