import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Redux requires store data to be serializable
        // However, Modal button configs contain onClick callbacks which are functions
        // Here we configure Redux to ignore serialization checks for these callbacks
        // @see https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data
        ignoredPaths: ['modal.modalProps.buttons'],
        ignoredActionPaths: ['payload.buttons']
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
