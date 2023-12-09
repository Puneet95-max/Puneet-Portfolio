import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allowScroll, setAllowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const newIndex = Math.floor(scrollY / window.innerHeight);

      if (newIndex === 2) {
        // If the last image is reached, allow scrolling
        setAllowScroll(true);
      }

      setCurrentIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const images = [
    'https://via.placeholder.com/800x600/FF0000/FFFFFF?text=Image+1',
    'https://via.placeholder.com/800x600/00FF00/000000?text=Image+2',
    'https://via.placeholder.com/800x600/0000FF/FFFFFF?text=Image+3',
  ];

  return (
    <div style={{ overflowY: allowScroll ? 'scroll' : 'hidden', height: '300vh' }}>
      {/* Progress bar */}
      <motion.div
        className="progress-bar"
        style={{
          width: `${(currentIndex + 1) / images.length * 100}%`,
          height: '6px',
          background: 'black',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9999,
          transition: 'width 0.3s ease-out', // Adjust the duration and easing here
        }}
      />

      {images.map((src, index) => (
        <motion.div
          key={index}
          style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: `url(${src}) center/cover no-repeat`,
            opacity: index === currentIndex ? 1 : 0,
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: -index, // To layer images on top of each other
          }}
        >
          {/* Content for each image goes here */}
          <h1 style={{ color: 'white' }}>{`Image ${index + 1}`}</h1>
        </motion.div>
      ))}
    </div>
  );
};

export default ScrollComponent;
