import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import anecdoteReducer from "../src/reducer/anecdoteReducer.js";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import Filtereducer from "../src/reducer/FilterAnecdotesReducer.js";

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: Filtereducer,
});

const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
