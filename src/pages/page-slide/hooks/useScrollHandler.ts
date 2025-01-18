import { useState, useCallback } from "react";

let scrollingTimer: NodeJS.Timeout;

export const useScrollHandler = (updateBackground: (scrollTop: number) => void) => {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = useCallback(
    (e: React.UIEvent<HTMLDivElement>) => {
      setIsScrolling(true);
      clearTimeout(scrollingTimer);
      scrollingTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 200);

      const scrollTop = e.currentTarget?.scrollTop;
      updateBackground(scrollTop);
    },
    [updateBackground]
  );

  return {
    isScrolling,
    handleScroll,
  };
};
