import React from "react";
import ReactDOM from "react-dom";
import TodoMain from "./TodoMain";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <TodoMain />
  </React.StrictMode>
);
