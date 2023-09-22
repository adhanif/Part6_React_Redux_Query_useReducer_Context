import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state);
  const orderedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);

  const vote = (id) => {
    dispatch({
      type: "VOTE",
      payload: {
        id: id,
      },
    });
  };

  const createAnecdote = (content) => {
    const getId = () => (100000 * Math.random()).toFixed(0);
    return {
      type: "NEW",
      payload: {
        content: content,
        id: getId(),
        votes: 0,
      },
    };
  };

  const addAnecdote = (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    dispatch(createAnecdote(content));
    e.target.anecdote.value = "";
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {orderedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
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

export default App;
