import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAnecdotes } from "../requests.js";

export default function AnecdoteList() {
  const result = useQuery({
    queryKey: ["anecdotes"],
    queryFn: getAnecdotes,
    retry: 1,
  });

  const { status } = result;

  // console.log(JSON.parse(JSON.stringify(result)));

  if (status === "loading") {
    return <div>loading data...</div>;
  }

  if (status === "error") {
    return (
      <span>anecdote service not available due to problems in server</span>
    );
  }

  const anecdotes = result.data;

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
