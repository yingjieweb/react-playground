import styles from "../styles.module.scss";

interface PageSlideBackgroundProps {
  showBackground: boolean;
  backgroundState: {
    bg1Opacity: number;
    bg1Size: number;
    bg2Opacity: number;
  };
  className: string;
}

export const PageSlideBackground = (props: PageSlideBackgroundProps) => {
  const { showBackground, backgroundState, className } = props;

  return (
    <div
      className={className}
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
  );
};
