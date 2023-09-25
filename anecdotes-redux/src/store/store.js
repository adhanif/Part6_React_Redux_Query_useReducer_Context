import { configureStore } from "@reduxjs/toolkit";
import anecdoteReducer from "../reducer/anecdoteReducer";
import FilterAnecdotesReducer from "../reducer/FilterAnecdotesReducer";

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: FilterAnecdotesReducer,
  },
});

export default store;
