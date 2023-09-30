import { createSlice } from "@reduxjs/toolkit";
import anecdotesService from "../services/anecdotesService";

// const anecdotesAtStart = [
//   "If it hurts, do it more often",
//   "Adding manpower to a late software project makes it later!",
//   "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
//   "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
//   "Premature optimization is the root of all evil.",
//   "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
// ];

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0,
//   };
// };

const getId = () => Number((Math.random() * 1000000).toFixed(0));
// const initialState = anecdotesAtStart.map(asObject);

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      const anecdote = action.payload;

      state.push({
        content: anecdote.content,
        id: anecdote.id,
        votes: anecdote.votes,
      });
    },

    voteChange(state, action) {
      const id = action.payload.id;
      // console.log(action.payload.id);
      // const votes=action
      const anecDoteToChange = state.find((ele) => ele.id === id);
      const changedAnecdoteVote = {
        ...anecDoteToChange,
        votes: anecDoteToChange.votes + 1,
      };

      return state.map((ele) => (ele.id !== id ? ele : changedAnecdoteVote));
    },

    appendAnecdote(state, action) {
      state.push(action.payload);
    },

    setAnecdote(state, action) {
      return action.payload;
    },
  },
});

export const { voteChange, createAnecdote, appendAnecdote, setAnecdote } =
  anecdoteSlice.actions;

export const initialAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdotesService.getAll();
    dispatch(setAnecdote(anecdotes));
  };
};

export const createNewAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdotesService.createNew(content);
    dispatch(createAnecdote(newAnecdote));
  };
};

export const AnecdoteVote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdotesService.update({
      ...anecdote,
      votes: anecdote.votes + 1,
    });
    console.log(updatedAnecdote);
    dispatch(voteChange(updatedAnecdote));
  };
};

export default anecdoteSlice.reducer;
