import { createContext, useReducer } from "react";

const NotificationReducer = (state, action) => {
  switch (action.type) {
    case "VOTE":
      return action.payload;
    case "CREATE":
      return action.payload;
    case "ZERO":
      return 0;
    default:
      return state;
  }
};
const AnecdoteContext = createContext();

export const AnecdoteContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(
    NotificationReducer,
    0
  );
  return (
    <AnecdoteContext.Provider value={[notification, notificationDispatch]}>
      {props.children}
    </AnecdoteContext.Provider>
  );
};

export default AnecdoteContext;
