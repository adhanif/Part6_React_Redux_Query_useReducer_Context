import React from "react";
import { useDispatch } from "react-redux";
import { createNewAnecdote } from "../reducer/anecdoteReducer";

import {
  setNotification,
  removeNotification,
} from "../reducer/NotificationReducer";

export default function AnecdoteForm() {
  const dispatch = useDispatch();

  const addAnecdote = async (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    dispatch(createNewAnecdote(content));

    dispatch(setNotification(`You created "${content}"`));
    setTimeout(() => {
      dispatch(removeNotification());
    }, 2000);
    e.target.anecdote.value = "";
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
}
