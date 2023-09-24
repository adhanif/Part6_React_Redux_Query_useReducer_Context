import React from "react";
import { useDispatch } from "react-redux";

export default function FilterAnecdotes() {
  const dispatch = useDispatch();

  const filterChange = (e) => {
    dispatch({
      type: "SET_FILTER",
      payload: e.target.value,
    });
  };

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={filterChange} />
    </div>
  );
}
