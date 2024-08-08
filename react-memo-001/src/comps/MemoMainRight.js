const MemoMainRight = ({ memoList }) => {
  const list = memoList.map((memo) => {
    return (
      <li>
        {memo.id} {memo.subject} {memo.date} {memo.time}
      </li>
    );
  });
  return (
    <div>
      메모리스트
      <ul>{list}</ul>
    </div>
  );
};
export default MemoMainRight;
