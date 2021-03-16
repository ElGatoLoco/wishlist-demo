import { useEffect, useState } from 'react';

type WindowDimensions = {
  innerWidth: number | null;
  innerHeight: number | null;
  outerWidth: number | null;
  outerHeight: number | null;
};

const nullDimensions: WindowDimensions = {
  innerWidth: null,
  innerHeight: null,
  outerWidth: null,
  outerHeight: null,
};

const getDimensions = (): WindowDimensions => {
  return {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
  };
};

export const useWindowSize = (): WindowDimensions => {
  const [windowSize, setWindowSize] = useState<WindowDimensions>(() => {
    if (typeof window !== 'undefined') {
      return getDimensions();
    } else {
      return nullDimensions;
    }
  });

  useEffect(() => {
    function onResize() {
      setWindowSize(getDimensions());
    }
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return windowSize;
};
