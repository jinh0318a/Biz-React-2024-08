import css from "../css/MemoMainRight.module.css";

const MemoMainRight = ({ memoList, onCompleteMemo }) => {
  const list = memoList.map((memo) => {
    return (
      <li>
        <div className={css.date_time}>
          <span>{memo.date}</span>
          <span>{memo.time}</span>
        </div>
        <span className={memo.complete ? "content complete" : "content"}>
          {memo.subject}
        </span>
        <div className={css.complete} onClick={() => onCompleteMemo(memo.id)}>
          &#x2713;
        </div>
      </li>
    );
  });
  return <ul className={css.main}>{list}</ul>;
};
export default MemoMainRight;
