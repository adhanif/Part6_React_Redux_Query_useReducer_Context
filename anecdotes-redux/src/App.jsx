import "./App.css";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import FilterAnecdotes from "./components/FilterAnecdotes";

function App() {
  return (
    <div>
      <FilterAnecdotes />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
}

export default App;
