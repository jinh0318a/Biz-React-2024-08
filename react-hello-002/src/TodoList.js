const TodoList = ({ todoes }) => {
  const list = todoes.map((todo) => {
    return <li>{todo}</li>;
  });
  return (
    <div className="list">
      <ul>{list}</ul>
    </div>
  );
};

export default TodoList;
