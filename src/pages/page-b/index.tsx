import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ModalC from "../modal-c";
import { useModal } from "../../hooks/useModal";
import styles from "./styles.module.scss";

function PageB() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();
  const { showModal, hideModal } = useModal();

  const handleInputChange = () => {
    setIsModalVisible(true);
    window.history.pushState(null, "", window.location.href);
  };

  useEffect(() => {
    const handleBackButton = () => setIsModalVisible(false);
    window.addEventListener("popstate", handleBackButton);
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [isModalVisible, navigate]);

  return (
    <div className={styles.pageB}>
      <h2>Page B</h2>
      <button onClick={() => handleInputChange()}>修改数据</button>
      {isModalVisible && <ModalC />}
      <button
        onClick={() =>
          showModal({
            title: "确认",
            message: "这是一段普通的文本哦",
            // message: "<p>这是一段<strong>HTML</strong>内容</p>",
            buttons: [
              {
                type: "primary",
                onClick: () => hideModal(),
                text: "确认",
              },
            ],
          })
        }
      >
        显示确认框
      </button>
    </div>
  );
}

export default PageB;
