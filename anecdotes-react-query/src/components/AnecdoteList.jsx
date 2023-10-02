import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAnecdotes, updateAnecdote } from "../requests.js";

export default function AnecdoteList() {
  const queryClient = useQueryClient();

  const updatedAnecdotsMutation = useMutation(updateAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryClient: ["anecdotes"],
      });
    },
  });

  const result = useQuery({
    queryKey: ["anecdotes"],
    queryFn: getAnecdotes,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const { status } = result;
  if (status === "loading") {
    return <div>loading data...</div>;
  }
  if (status === "error") {
    return (
      <span>anecdote service not available due to problems in server</span>
    );
  }
  const anecdotes = result.data;

  const handleVotes = (anecdote) => {
    updatedAnecdotsMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 });
  };

  return (
    <div>
      <h1>Anecdotes</h1>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVotes(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
}
