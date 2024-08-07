const TodoItem = ({ todo }) => {
  return (
    <li className="todoItem">
      <div className="date">
        <div>2024.08.07</div>
        <div>11:11:11</div>
      </div>
      <span className="content">{todo}</span>
      <div className="complete">&#x2713;</div>
    </li>
  );
};
export default TodoItem;
