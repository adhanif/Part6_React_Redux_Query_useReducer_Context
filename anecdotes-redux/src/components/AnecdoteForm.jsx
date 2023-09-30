import React from "react";
import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducer/anecdoteReducer";
import anecdotesService from "../services/anecdotesService";

import {
  setNotification,
  removeNotification,
} from "../reducer/NotificationReducer";

export default function AnecdoteForm() {
  const dispatch = useDispatch();

  const addAnecdote = async (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    const newAnecdote = await anecdotesService.createNew(content);
    dispatch(createAnecdote(newAnecdote));

    dispatch(setNotification(`You created "${newAnecdote}"`));
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
