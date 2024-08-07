import "../css/TodoInput.css";
import { useState } from "react";

/**
 * TDOD input box 에 할일을 입력하고
 * 추가 버튼을 클릭하면 todoList 배열에 추가하여
 * 추가된 리스트가 보이도록
 *
 */
const TodoInput = ({ todoList, setTodoList }) => {
  const [todo, setTodo] = useState("");
  return (
    <div className="todoInput">
      <input onChange={(e) => setTodo(e.target.value)} placeholder="TODO" />
      <button onClick={() => setTodoList([...todoList, todo])}>추가</button>
    </div>
  );
};

export default TodoInput;
