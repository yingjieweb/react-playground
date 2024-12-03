import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalC from '../modal-c';

function PageB() {
  const [isFormDirty, setIsFormDirty] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = () => {
    setIsFormDirty(true); // 模拟脏数据
  };

  useEffect(() => {
    // 为了阻止返回操作，我们推送一个新的历史记录
    window.history.pushState(null, '', window.location.href);
    const handleBackButton = (event: PopStateEvent) => {
      console.log('handleBackButton', event, isFormDirty);
      if (isFormDirty) {
        setIsFormDirty(false)
        const confirmLeave = window.confirm('You have unsaved changes, are you sure you want to leave?');
        if (confirmLeave) {
          // 用户确认离开，移除事件监听后进行返回
          console.log('用户确认离开，移除事件监听后进行返回');
          window.removeEventListener('popstate', handleBackButton); // 移除事件监听
          navigate(-1); // 执行返回
          setIsFormDirty(false)
        } else {
          // 阻止默认的返回行为
          console.log('阻止默认的返回行为');
          window.history.pushState(null, '', window.location.href);
        }
      } else {
        // 数据不脏，直接返回
        navigate(-1); // 或者 window.history.back()
      }
    };

    window.addEventListener('popstate', handleBackButton);
    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [isFormDirty, navigate]);

  return (
    <div>
      <h2>Page B</h2>
      <button onClick={() => handleInputChange()}>修改数据</button>
      {isFormDirty && <ModalC />}
    </div>
  );
}

export default PageB;
