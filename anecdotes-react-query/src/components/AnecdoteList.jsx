import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAnecdotes, updateAnecdote } from "../requests.js";
import { useContext } from "react";
import AnecdoteContext from "../AnecdoteContext.jsx";

export default function AnecdoteList() {
  const queryClient = useQueryClient();
  const [notification, notificationDispatch] = useContext(AnecdoteContext);

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
    notificationDispatch({
      type: "VOTE",
      payload: `acendote "${anecdote.content}" voted`,
    });
    setTimeout(() => {
      notificationDispatch({ type: "ZERO" });
    }, 5000);
  };

  return (
    <div>
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
