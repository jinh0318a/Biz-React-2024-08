// Memo.module.css 파일을 css 이름으로 import
import css from "../css/MemoMain.module.css";
import MemoMainLeft from "./MemoMainLeft";
import MemoMainRight from "./MemoMainRight";
import { useState, useEffect, useCallback } from "react";

const MemoMain = () => {
  const loadMemos = useCallback(() => {
    const loadMemo = () => {
      const loadMemoList = localStorage.getItem("MEMOS");
      if (!loadMemoList) return [];
      return JSON.parse(loadMemoList);
    };
    return loadMemo();
  }, []);

  const [memoList, setMemoList] = useState([...loadMemos()]);
  useEffect(() => {
    const saveMemo = () => {
      localStorage.setItem("MEMOS", JSON.stringify(memoList));
    };
    saveMemo();
  }, [memoList]);

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

  const onDeleteMemo = (id) => {
    const resultList = memoList.filter((memo) => {
      if (memo.id === id) {
        return false;
      } else {
        return true;
      }
    });
    setMemoList([...resultList]);
  };

  return (
    <>
      <h1 className={css.header}>오늘은 내 생애의 가장 젊은날</h1>
      <section className={css.main}>
        <article className={css.aside}>
          <MemoMainLeft onAddMemo={onAddMemo} />
        </article>
        <article className={css.aside}>
          <MemoMainRight
            memoList={memoList}
            onCompleteMemo={onCompleteMemo}
            onDeleteMemo={onDeleteMemo}
          />
        </article>
      </section>
      <footer className={css.footer}>
        <address>CopyRight &copy; jinh0318a@naver.com</address>
      </footer>
    </>
  );
};

export default MemoMain;
