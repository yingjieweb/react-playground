import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { open, close } from '../store/modalSlice';
import { ModalConfig } from '../components/GlobalModal/types';

export const useModal = () => {
  const dispatch = useDispatch();
  const modalState = useSelector((state: RootState) => state.modal);

  const showModal = (modalProps: ModalConfig) => {
    dispatch(open(modalProps));
  };

  const hideModal = () => {
    dispatch(close());
  };

  return {
    visible: modalState.visible,
    modalProps: modalState.modalProps,
    showModal,
    hideModal,
  };
}; 