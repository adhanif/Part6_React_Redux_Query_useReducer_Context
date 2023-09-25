import "./App.css";
import { useEffect } from "react";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import FilterAnecdotes from "./components/FilterAnecdotes";
import Notification from "./components/Notification";
import anecdotesService from "../services/anecdotesService";
import { useDispatch } from "react-redux";
import { setAnecdote } from "../src/reducer/anecdoteReducer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    anecdotesService
      .getAll()
      .then((anecdotes) => dispatch(setAnecdote(anecdotes)));
  }, []);

  return (
    <div>
      <FilterAnecdotes />
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
}

export default App;
