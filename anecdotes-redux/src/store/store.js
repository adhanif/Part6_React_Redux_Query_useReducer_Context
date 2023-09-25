import { configureStore } from "@reduxjs/toolkit";
import anecdoteReducer from "../reducer/anecdoteReducer";
import FilterAnecdotesReducer from "../reducer/FilterAnecdotesReducer";

import NotificationReducer from "../reducer/NotificationReducer";

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: FilterAnecdotesReducer,
    notification: NotificationReducer,
  },
});

export default store;
