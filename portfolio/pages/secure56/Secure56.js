import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Secure56 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const newIndex = Math.floor(scrollY / window.innerHeight);

      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
        controls.start({ y: -newIndex * window.innerHeight });
      }

      // Enable scrolling after all images are shown
      if (newIndex === totalImages - 1) {
        setScrollEnabled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentIndex, controls]);

  const totalImages = 3; // Adjust based on the total number of images
  const images = [
    'https://via.placeholder.com/800x600/FF0000/FFFFFF?text=Image+1',
    'https://via.placeholder.com/800x600/00FF00/000000?text=Image+2',
    'https://via.placeholder.com/800x600/0000FF/FFFFFF?text=Image+3',
  ];

  return (
    <motion.div
      style={{
        height: '100vh',
        overflowY: scrollEnabled ? 'auto' : 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
      animate={controls}
    >
      {images.map((src, index) => (
        <motion.div key={index} style={{ height: '100vh' }}>
          <img
            src={src}
            alt={`Image ${index + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Secure56;
