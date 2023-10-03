import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

import { AnecdoteContextProvider } from "./AnecdoteContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <AnecdoteContextProvider>
      <App />
    </AnecdoteContextProvider>
  </QueryClientProvider>
);
