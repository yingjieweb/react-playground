import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalConfig } from "../components/GlobalModal/types";

interface ModalState {
  visible: boolean;
  modalProps: ModalConfig | null;
}

const initialState: ModalState = {
  visible: false,
  modalProps: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state, action: PayloadAction<ModalConfig>) => {
      state.visible = true;
      state.modalProps = action.payload;
    },
    close: (state) => {
      state.visible = false;
      state.modalProps = null;
    },
  },
});

export const { open, close } = modalSlice.actions;
export default modalSlice.reducer;
