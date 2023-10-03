import { useSelector } from "react-redux";
import { useContext } from "react";
import AnecdoteContext from "../AnecdoteContext.jsx";

const Notification = () => {
  const [notification, notificationDispatch] = useContext(AnecdoteContext);
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 20,
  };
  return notification ? <div style={style}>{notification}</div> : null;
};

export default Notification;
