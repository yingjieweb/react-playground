import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

function PageSlide() {
  const [showBackground, setShowBackground] = useState(false);
  const groupRef = useRef<HTMLDivElement>(null);
  const [bg1Size, setBg1Size] = useState(1);
  const [bg1Opacity, setBg1Opacity] = useState(0);
  const [bg2Opacity, setBg2Opacity] = useState(0);

  useEffect(() => {
    if (groupRef.current) {
      observer.observe(groupRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        setShowBackground(entry.isIntersecting);
      });
    },
    {
      // 设置根元素为视窗
      root: null,
      // 设置根元素的边距，可以提前或延迟触发
      rootMargin: "0px",
      // 设置交叉比例阈值
      threshold: 0.1,
    }
  );
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const screenHeight = window.innerHeight;
    const scrollTop = e.currentTarget.scrollTop;
    const currentScreen = Math.floor(scrollTop / screenHeight);

    console.log("===========", currentScreen);

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

      <div className={styles.pageSlideGroup} ref={groupRef}>
        <div className={styles.pageSlideItem}>3.1</div>
        <div className={styles.pageSlideItem}>3.2</div>
        <div className={styles.pageSlideItem}>3.3</div>
        <div className={styles.pageSlideItem}>3.4</div>
        <div className={styles.pageSlideItem}>3.5</div>
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
      </div>

      <div className={styles.pageSlideItem}>4</div>
      <div className={styles.pageSlideItem}>5</div>
    </div>
  );
}

export default PageSlide;
