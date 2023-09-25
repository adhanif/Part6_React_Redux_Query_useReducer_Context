import { createSlice } from "@reduxjs/toolkit";

const initialState = "This is error";

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification: (state, action) => action.payload,
  },
});

export const { setNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
