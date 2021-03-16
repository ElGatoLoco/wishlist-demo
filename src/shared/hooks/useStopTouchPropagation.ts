import { useEffect } from 'react';

const addStopTouchPropagationListeners = (ref: React.MutableRefObject<Element | null>) => {
  ['touchstart', 'touchmove', 'touchend'].forEach((evt) => {
    ref.current?.addEventListener(evt, (e) => e.stopPropagation(), {
      passive: true,
    });
  });
};

const removeStopTouchPropagationListeners = (ref: React.MutableRefObject<Element | null>) => {
  ['touchstart', 'touchmove', 'touchend'].forEach((evt) => {
    ref.current?.removeEventListener(evt, (e) => e.stopPropagation());
  });
};

type UseStopTouchPropagation = (refs: React.MutableRefObject<Element | null>[]) => void;
export const useStopTouchPropagation: UseStopTouchPropagation = (refs) => {
  useEffect(() => {
    refs.forEach(addStopTouchPropagationListeners);

    return () => {
      refs.forEach(removeStopTouchPropagationListeners);
    };
  }, [refs]);
};
