import React from "react";
// import { Notification } from "../reducer/NotificationReducer";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createAnecdote } from "../requests";

export default function AnecdoteForm() {
  const queryClient = useQueryClient();

  // const newAnecdoteMutation = useMutation({ mutationFn: createAnecdote });

  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["anecdotes"] });
    },
  });

  // console.log(JSON.parse(JSON.stringify(newAnecdoteMutation)));

  const addAnecdote = async (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    newAnecdoteMutation.mutate({ content, votes: 0 });
    // dispatch(createNewAnecdote(content));
    // dispatch(Notification(`You created "${content}"`));
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
