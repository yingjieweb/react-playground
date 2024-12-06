import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

interface IModalProps {
  x: number;
  onClose: () => void;
}

function Modal(props: IModalProps) {
  const { x, onClose } = props;

  const [touchX, setTouchX] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const isDragging = useRef(false);

  useEffect(() => {
    setTouchX(x);
  }, [x]);

  const handleTouchStart = (e: TouchEvent) => {
    if (e.touches[0].clientX <= 50) {
      isDragging.current = true;
      touchStartX.current = e.touches[0].clientX;
    }
  };
  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging.current) {
      const currentX = e.touches[0].clientX;
      const diff = currentX - touchStartX.current;
      const boundedDiff = Math.max(0, Math.min(diff, window.innerWidth));
      setTouchX(boundedDiff);
    }
  };
  const handleTouchEnd = (e: TouchEvent) => {
    if (isDragging.current) {
      touchEndX.current = e.changedTouches[0].clientX;
      const swipeDistance = touchEndX.current - touchStartX.current;
      if (swipeDistance > 100) {
        setTouchX(window.innerWidth);
        onClose();
      } else {
        setTouchX(0);
      }
      isDragging.current = false;
    }
  };

  return (
    <motion.div
      className={styles.pageModal}
      initial={{ opacity: 0, x: "100%" }}
      animate={{
        opacity: 1,
        x: touchX ? `${touchX}px` : 0,
      }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{
        duration: touchX ? 0 : 0.3,
        ease: "easeInOut",
      }}
      // @ts-ignore
      onTouchStart={handleTouchStart}
      // @ts-ignore
      onTouchMove={handleTouchMove}
      // @ts-ignore
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.close} onClick={onClose}>
        关闭
      </div>
    </motion.div>
  );
}

export default Modal;
