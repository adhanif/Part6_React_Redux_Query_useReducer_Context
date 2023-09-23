import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function AnecdoteList() {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state);

  const orderedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);

  const vote = (id) => {
    dispatch({
      type: "VOTE",
      payload: {
        id: id,
      },
    });
  };

  return (
    <div>
      <h1>Anecdotes</h1>
      {orderedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
}
