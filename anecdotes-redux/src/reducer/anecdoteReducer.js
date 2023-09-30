import { createSlice } from "@reduxjs/toolkit";
import anecdotesService from "../services/anecdotesService";

const getId = () => Number((Math.random() * 1000000).toFixed(0));

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
    dispatch(voteChange(updatedAnecdote));
  };
};

export default anecdoteSlice.reducer;
