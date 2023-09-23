import React from "react";
import { useDispatch } from "react-redux";

export default function AnecdoteForm() {
  const dispatch = useDispatch();

  const createAnecdote = (content) => {
    const getId = () => (100000 * Math.random()).toFixed(0);
    return {
      type: "NEW",
      payload: {
        content: content,
        id: getId(),
        votes: 0,
      },
    };
  };

  const addAnecdote = (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    dispatch(createAnecdote(content));
    e.target.anecdote.value = "";
  };

  return (
    <div>
      
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
}
