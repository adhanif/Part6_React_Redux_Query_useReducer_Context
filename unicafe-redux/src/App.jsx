import "./App.css";
// import { createStore } from "redux";
import Button from "./components/Button";
// import counterReducer from "./reducers/counterReducer";
// const store = createStore(counterReducer);
function App({ store }) {
  console.log(store.getState());
  const good = () => {
    store.dispatch({
      type: "GOOD",
    });
  };
  const ok = () => {
    store.dispatch({
      type: "OK",
    });
  };

  const bad = () => {
    store.dispatch({
      type: "BAD",
    });
  };

  const reset = () => {
    store.dispatch({
      type: "ZERO",
    });
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <Button handleClick={good} text={"good"} />
        <Button handleClick={ok} text={"ok"} />
        <Button handleClick={bad} text={"bad"} />
        <Button handleClick={reset} text={"reset"} />
      </div>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </>
  );
}

export default App;
