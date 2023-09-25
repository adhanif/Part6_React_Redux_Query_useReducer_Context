import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { voteChange } from "../reducer/anecdoteReducer";
import {
  setNotification,
  removeNotification,
} from "../reducer/NotificationReducer";

export default function AnecdoteList() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const anecdotes = useSelector(({ anecdotes }) =>
    anecdotes.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(filter.toLowerCase())
    )
  );

  const notification = useSelector((state) => state.notificaton);

  const orderedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);

  const vote = (anecdote) => {
    dispatch(voteChange(anecdote.id));
    dispatch(setNotification(`you voted "${anecdote.content}"`));

    setTimeout(() => {
      dispatch(removeNotification());
    }, 5000);
  };

  return (
    <div>
      <h1>Anecdotes</h1>
      {orderedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
}
