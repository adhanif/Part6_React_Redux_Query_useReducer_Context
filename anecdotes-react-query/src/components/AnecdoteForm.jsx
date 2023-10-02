import React from "react";
// import { Notification } from "../reducer/NotificationReducer";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAnecdote } from "../requests";

export default function AnecdoteForm() {
  const queryClient = useQueryClient();

  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData({ queryKey: ["anecdotes"] });
      queryClient.setQueryData(
        { queryKey: ["anecdotes"] },
        anecdotes.concat(newAnecdote)
      );
    },
  });

  const addAnecdote = async (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    newAnecdoteMutation.mutate({ content, votes: 0 });
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
