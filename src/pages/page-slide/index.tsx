import { useState } from "react";
import styles from "./styles.module.scss";
import IntersectionObserver from "../../components/IntersectionObserver";

let scrollingTimer: NodeJS.Timeout;

function PageSlide() {
  const [showBackground, setShowBackground] = useState(false);
  const [backgroundState, setBackgroundState] = useState({
    bg1Size: 1,
    bg1Opacity: 0,
    bg2Opacity: 0,
  });
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setIsScrolling(true);
    clearTimeout(scrollingTimer);
    scrollingTimer = setTimeout(() => {
      setIsScrolling(false);
    }, 200);

    const scrollTop = e.currentTarget?.scrollTop;
    updateBackgroundState(scrollTop);
  };
  const updateBackgroundState = (scrollTop: number) => {
    const screenHeight = window.innerHeight;
    const currentScreen = Math.floor(scrollTop / screenHeight);
    if (currentScreen === 2 || currentScreen === 3) {
      setBackgroundState({
        bg1Size: (scrollTop - screenHeight) / screenHeight,
        bg1Opacity: 1,
        bg2Opacity: 0,
      });
    } else if (currentScreen >= 4 && currentScreen <= 6) {
      setBackgroundState({
        ...backgroundState,
        bg1Opacity: 0,
        bg2Opacity: 1,
      });
    } else {
      setBackgroundState({
        ...backgroundState,
        bg1Opacity: 0,
        bg2Opacity: 0,
      });
    }
  };

  return (
    <div className={styles.pageSlide} onScroll={handleScroll}>
      <div className={styles.pageSlideItem}>1</div>
      <div className={styles.pageSlideItem}>2</div>

      <IntersectionObserver
        className={styles.pageSlideGroup}
        onObserve={() => setShowBackground(true)}
      >
        <div
          className={styles.pageSlideItem}
          style={{ opacity: isScrolling ? 0 : 1 }}
        >
          3.1
        </div>
        <div
          className={styles.pageSlideItem}
          style={{ opacity: isScrolling ? 0 : 1 }}
        >
          3.2
        </div>
        <div
          className={styles.pageSlideItem}
          style={{ opacity: isScrolling ? 0 : 1 }}
        >
          3.3
        </div>
        <div
          className={styles.pageSlideItem}
          style={{ opacity: isScrolling ? 0 : 1 }}
        >
          3.4
        </div>
        <div
          className={styles.pageSlideItem}
          style={{ opacity: isScrolling ? 0 : 1 }}
        >
          3.5
        </div>
        <div
          className={styles.pageSlideGroupBackground}
          style={{ display: showBackground ? "block" : "none" }}
        >
          <div
            className={styles.background1}
            style={{
              opacity: backgroundState.bg1Opacity,
              backgroundSize: `${backgroundState.bg1Size * 100}% ${
                backgroundState.bg1Size * 100
              }%`,
            }}
          />
          <div
            className={styles.background2}
            style={{ opacity: backgroundState.bg2Opacity }}
          />
        </div>
      </IntersectionObserver>

      <div className={styles.pageSlideItem}>4</div>
      <div className={styles.pageSlideItem}>5</div>
    </div>
  );
}

export default PageSlide;
