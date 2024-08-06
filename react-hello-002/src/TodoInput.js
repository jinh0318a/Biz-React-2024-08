import { useState } from "react";
const TodoInput = ({ todoes, setTodoes }) => {
  const [todo, setTodo] = useState("");
  return (
    <div className="input">
      <input onChange={(e) => setTodo(e.target.value)} placeholder="TO DO..." />
      <button onClick={() => setTodoes([...todoes, todo])}>추가</button>
    </div>
  );
};

export default TodoInput;
