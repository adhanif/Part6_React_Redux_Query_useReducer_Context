import React from "react";

export default function Button({ handleClick, text }) {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
}
