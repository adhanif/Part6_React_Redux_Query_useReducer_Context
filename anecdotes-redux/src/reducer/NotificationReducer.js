import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification(state, action) {
      return action.payload;
    },
    removeNotification: (state) => null,
  },
});

export const { setNotification, removeNotification } =
  notificationSlice.actions;

export const Notification = (content) => {
  return async (dispatch) => {
    dispatch(setNotification(content));
    setTimeout(() => {
      dispatch(removeNotification());
    }, 2000);
  };
};
export default notificationSlice.reducer;
