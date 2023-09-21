import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createStore } from "redux";
import counterReducer from "../src/reducers/counterReducer.js";
const store = createStore(counterReducer);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App  />
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderApp = () => {
  root.render(<App store={store} />);
};

renderApp();
store.subscribe(renderApp);
