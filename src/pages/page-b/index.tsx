import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ModalC from "../modal-c";

function PageB() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

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
    <div>
      <h2>Page B</h2>
      <button onClick={() => handleInputChange()}>修改数据</button>
      {isModalVisible && <ModalC />}
    </div>
  );
}

export default PageB;
