import { useState, useCallback } from "react";

export const useBackgroundEffect = () => {
  const [backgroundState, setBackgroundState] = useState({
    bg1Size: 1,
    bg1Opacity: 0,
    bg2Opacity: 0,
  });

  const updateBackground = useCallback((scrollTop: number) => {
    const screenHeight = window.innerHeight;
    const currentScreen = Math.floor(scrollTop / screenHeight);

    if (currentScreen === 2 || currentScreen === 3) {
      setBackgroundState({
        bg1Size: (scrollTop - screenHeight) / screenHeight,
        bg1Opacity: 1,
        bg2Opacity: 0,
      });
    } else if (currentScreen >= 4 && currentScreen <= 6) {
      setBackgroundState((prev) => ({
        ...prev,
        bg1Opacity: 0,
        bg2Opacity: 1,
      }));
    } else {
      setBackgroundState((prev) => ({
        ...prev,
        bg1Opacity: 0,
        bg2Opacity: 0,
      }));
    }
  }, []);

  return { backgroundState, updateBackground };
};
