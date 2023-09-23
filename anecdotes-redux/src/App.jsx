import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";

function App() {
  return (
    <div>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
}

export default App;
