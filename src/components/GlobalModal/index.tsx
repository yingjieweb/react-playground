import React from "react";
import { useModal } from "../../hooks/useModal";
import styles from "./styles.module.scss";
import { ButtonConfig } from "./types";

const GlobalModal: React.FC = () => {
  const { visible, modalProps, hideModal } = useModal();

  const renderMessage = () => {
    const message = modalProps?.message;
    if (typeof message === "string" && /<[^>]*>/g.test(message)) {
      return <div dangerouslySetInnerHTML={{ __html: message }} />;
    }
    return message;
  };

  if (!visible) return null;

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <div className={styles.close} onClick={hideModal}>
          ×
        </div>
        {modalProps?.title && (
          <div className={styles.title}>{modalProps.title}</div>
        )}
        <div className={styles.message}> {renderMessage()} </div>
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
