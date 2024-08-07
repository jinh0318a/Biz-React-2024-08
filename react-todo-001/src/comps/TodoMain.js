import "../css/TodoMain.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useState } from "react";
const TodoMain = () => {
  const [todoList, setTodoList] = useState([
    "체육관 가기",
    "청구서 정리",
    "길동이 만나기",
    "계란 구입하기",
    "HTML 익히기",
  ]);
  return (
    <section className="todoMain">
      <header className="todoHeader">
        <h1>오늘 해야 할 일</h1>
      </header>
      <TodoInput todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} />
    </section>
  );
};

export default TodoMain;
