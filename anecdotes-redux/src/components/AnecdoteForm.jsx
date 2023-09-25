import React from "react";
import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducer/anecdoteReducer";

export default function AnecdoteForm() {
  const dispatch = useDispatch();

  const addAnecdote = (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    dispatch(createAnecdote(content));
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
