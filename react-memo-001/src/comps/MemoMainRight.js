import css from "../css/MemoMainRight.module.css";

const MemoMainRight = ({ memoList }) => {
  const list = memoList.map((memo) => {
    return (
      <li>
        {memo.date} {memo.time} {memo.subject}
      </li>
    );
  });
  return <ul className={css.main}>{list}</ul>;
};
export default MemoMainRight;
