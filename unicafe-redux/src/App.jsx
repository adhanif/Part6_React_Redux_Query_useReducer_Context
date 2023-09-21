import { useState } from "react";
import "./App.css";

import { createStore } from "redux";
import counterReducer from "./reducer";
import noteReducer from "./reducers/noteReducer";

// const store = createStore(counterReducer);
const store = createStore(noteReducer);

function App() {
  store.subscribe(() => {
    const storeNow = store.getState();
    // console.log(storeNow);
  });

  store.dispatch({
    type: "NEW_NOTE",
    payload: {
      content: "the app state is in redux store",
      important: true,
      id: 1,
    },
  });

  store.dispatch({
    type: "NEW_NOTE",
    payload: {
      content: "state changes are made with actions",
      important: false,
      id: 2,
    },
  });

  return (
    <div>
      <ul>
        {store.getState().map((note) => (
          <li key={note.id}>
            {note.content} <strong>{note.important ? "important" : ""}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;