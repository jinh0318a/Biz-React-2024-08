import "../css/TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList }) => {
  const listView = todoList.map((todo) => <TodoItem todo={todo} />);
  return <ul className="todoList">{listView}</ul>;
};

export default TodoList;
