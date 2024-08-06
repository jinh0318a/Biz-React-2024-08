import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useState } from "react";
import "./css/main.css";

const TodoMain = () => {
  const [todoes, setTodoes] = useState(["책상정리", "계란 구입"]);
  return (
    <div className="main">
      <TodoInput todoes={todoes} setTodoes={setTodoes} />
      <TodoList todoes={todoes} />
    </div>
  );
};

export default TodoMain;
