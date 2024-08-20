// Memo.module.css 파일을 css 이름으로 import
import css from "../css/MemoMain.module.css";
import MemoMainLeft from "./MemoMainLeft";
import MemoMainRight from "./MemoMainRight";
import { useState } from "react";

const MemoMain = () => {
  const [memoList, setMemoList] = useState([]);

  const onAddMemo = (memo) => {
    setMemoList([...memoList, memo]);
  };

  const onCompleteMemo = (id) => {
    const completeList = memoList.map((memo) => {
      if (memo.id === id) {
        return { ...memo, complete: !memo.complete };
      } else {
        return memo;
      }
    });
    setMemoList([...completeList]);
  };

  return (
    <>
      <h1 className={css.header}>오늘은 내 생애의 가장 젊은날</h1>
      <section className={css.main}>
        <article className={css.aside}>
          <MemoMainLeft onAddMemo={onAddMemo} />
        </article>
        <article className={css.aside}>
          <MemoMainRight memoList={memoList} onCompleteMemo={onCompleteMemo} />
        </article>
      </section>
      <footer className={css.footer}>
        <address>CopyRight &copy; jinh0318a@naver.com</address>
      </footer>
    </>
  );
};

export default MemoMain;
