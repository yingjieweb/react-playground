import { useState } from "react";
import styles from "./styles.module.scss";
import IntersectionObserver from "../../components/IntersectionObserver";

let scrollingTimer: NodeJS.Timeout;

function PageSlide() {
  const [showBackground, setShowBackground] = useState(false);
  const [bg1Size, setBg1Size] = useState(1);
  const [bg1Opacity, setBg1Opacity] = useState(0);
  const [bg2Opacity, setBg2Opacity] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setIsScrolling(true);
    clearTimeout(scrollingTimer);
    scrollingTimer = setTimeout(() => {
      setIsScrolling(false);
    }, 200);

    const screenHeight = window.innerHeight;
    const scrollTop = e.currentTarget?.scrollTop;
    const currentScreen = Math.floor(scrollTop / screenHeight);

    switch (currentScreen) {
      case 2:
        setBg1Opacity(1);
        setBg2Opacity(0);
        setBg1Size((scrollTop - screenHeight * 1) / screenHeight);
        break;
      case 3:
        setBg1Opacity(1);
        setBg2Opacity(0);
        setBg1Size((scrollTop - screenHeight * 1) / screenHeight);
        break;
      case 4:
      case 5:
      case 6:
        setBg1Opacity(0);
        setBg2Opacity(1);
        break;
      default:
        setBg1Opacity(0);
        setBg2Opacity(0);
        break;
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
              opacity: bg1Opacity,
              backgroundSize: `${bg1Size * 100}% ${bg1Size * 100}%`,
            }}
          />
          <div className={styles.background2} style={{ opacity: bg2Opacity }} />
        </div>
      </IntersectionObserver>

      <div className={styles.pageSlideItem}>4</div>
      <div className={styles.pageSlideItem}>5</div>
    </div>
  );
}

export default PageSlide;
