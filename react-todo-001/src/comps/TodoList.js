import "../css/TodoList.css";
import TodoItem from "./TodoItem";
/***
 * TodoMain 에서 생성한 todoList state 배열과 setTodoList() 함수를 전달받아
 * TodoItem 에서 사용할 수 있도록 넘겨주는 역할을 수행
 *
 * TodoMain 에서 생성한 배열을 TodoItem 에서 바로 받아 처리할 수 없기 때문에
 */
const TodoList = ({ todoList, setTodoList }) => {
  const listView = todoList.map((todo) => (
    <TodoItem todo={todo} todoList={todoList} setTodoList={setTodoList} />
  ));
  return <ul className="todoList">{listView}</ul>;
};

export default TodoList;
