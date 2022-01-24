import { useEffect, useState } from 'react';

export const getWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.outerWidth,
          height: window.outerHeight,
        });
      };

      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    } else {
      return;
    }
  }, []);
  return windowSize;
};
