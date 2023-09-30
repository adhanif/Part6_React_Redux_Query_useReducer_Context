import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getId = () => Number((Math.random() * 1000000).toFixed(0));

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (content) => {
  const id = getId();
  const obj = { content, id, votes: 0 };
  const response = await axios.post(baseUrl, obj);
  return response.data;
};

const update = async (anecdote) => {
  const response = await axios.put(`${baseUrl}/${anecdote.id}`, anecdote);
  return response.data;
};

export default { getAll, createNew, update };
