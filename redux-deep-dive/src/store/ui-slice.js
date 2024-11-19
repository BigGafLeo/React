import { createSlice } from "@reduxjs/toolkit";const initialValues = { cartIsVisible: false, notification: null };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialValues,
  reducers: {
    toogle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;
