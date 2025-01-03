import React from "react";
import { useModal } from "../../hooks/useModal";
import styles from "./styles.module.scss";
import { ButtonConfig } from "./types";

const GlobalModal: React.FC = () => {
  const { visible, modalProps } = useModal();

  if (!visible) return null;

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        {modalProps?.title && (
          <div className={styles.title}>{modalProps.title}</div>
        )}
        <div className={styles.message}>{modalProps?.message}</div>
        <div className={styles.footer}>
          {modalProps?.buttons?.map((button: ButtonConfig, index: number) => (
            <button
              key={index}
              className={`${styles.button} ${
                button.type === "primary" ? styles.primary : styles.default
              }`}
              onClick={button.onClick}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalModal;
