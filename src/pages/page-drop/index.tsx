import React from "react";
import styles from "./styles.module.scss";

function PageDrop() {
  return (
    <div className={styles.pageDrop}>
      <div className={styles.headerNav}>
        <div className={styles.dropContainer}>
          <div className={styles.dropTrigger}>dropTrigger</div>
          <div className={styles.dropContent}>
            <div className={styles.dropItem}>dropItem</div>
            <div className={styles.dropItem}>dropItem</div>
            <div className={styles.dropItem}>dropItem</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageDrop;
