import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ['modal.modalProps.buttons'],
        ignoredActionPaths: ['payload.buttons']
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
