import { useState } from "react";
import styles from "./styles.module.scss";
import IntersectionObserver from "../../components/IntersectionObserver";
import { useBackgroundEffect } from "./hooks/useBackgroundEffect";
import { useScrollHandler } from "./hooks/useScrollHandler";
import { PageSlideItem } from "./components/PageSlideItem";
import { PageSlideBackground } from "./components/PageSlideBackground";

function PageSlide() {
  const [showBackground, setShowBackground] = useState(false);
  const { backgroundState, updateBackground } = useBackgroundEffect();
  const { isScrolling, handleScroll } = useScrollHandler(updateBackground);

  return (
    <div className={styles.pageSlide} onScroll={handleScroll}>
      <div className={styles.pageSlideItem}>1</div>
      <div className={styles.pageSlideItem}>2</div>

      <IntersectionObserver
        className={styles.pageSlideGroup}
        onObserve={() => setShowBackground(true)}
      >
        <PageSlideItem isScrolling={isScrolling} className={styles.pageSlideItem}>3.1</PageSlideItem>
        <PageSlideItem isScrolling={isScrolling} className={styles.pageSlideItem}>3.2</PageSlideItem>
        <PageSlideItem isScrolling={isScrolling} className={styles.pageSlideItem}>3.3</PageSlideItem>
        <PageSlideItem isScrolling={isScrolling} className={styles.pageSlideItem}>3.4</PageSlideItem>
        <PageSlideItem isScrolling={isScrolling} className={styles.pageSlideItem}>3.5</PageSlideItem>
        
        <PageSlideBackground 
          showBackground={showBackground}
          backgroundState={backgroundState}
          className={styles.pageSlideGroupBackground}
        />
      </IntersectionObserver>

      <div className={styles.pageSlideItem}>4</div>
      <div className={styles.pageSlideItem}>5</div>
    </div>
  );
}

export default PageSlide;
