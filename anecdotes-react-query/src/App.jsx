import React from "react";
import "./App.css";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import FilterAnecdotes from "./components/FilterAnecdotes";
import Notification from "./components/Notification";

function App() {
  return (
    <div>
      {/* <FilterAnecdotes />
      <Notification /> */}
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
}

export default App;
