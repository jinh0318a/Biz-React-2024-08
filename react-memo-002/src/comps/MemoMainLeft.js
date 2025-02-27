import css from "../css/MemoMainLeft.module.css";
import { useState } from "react";
import { getMemoJSON } from "../modules/MemoUtils";

const MemoMainLeft = ({ onAddMemo }) => {
  const [memo, setMemo] = useState({});

  const onNewMemo = () => {
    setMemo(getMemoJSON());
  };

  // const onChangeHandler = (e) => {
  //   const value = e.target.value;
  //   setMemo({ ...memo, subject: value });
  // };

  const onChangeHandler = (e) => {
    // e.target 으로 부터 name 속성과 value 속성을 구조분해 하기
    const { name, value } = e.target;

    // react 에서는 state 선언된 변수, 배열, 객체를 절대 직접 변경해서는 안된다
    // 반드시 미리 생성한 setState 함수를 사용하여 변수를 새로 생성해야한다
    // react 는 변경되기전 값과 변경된 후 값을 비교하여 화면을 rendering 하기 때문에
    // memo[name] = value
    setMemo({ ...memo, [name]: value });
  };

  /**
   *  setMemo(getMemoJSON("",""))
   *  입력된 memo 를 memoList 에 추가한 후 화면에 보이는 input box 에 내용을 초기화 하기위한 코드
   *  하지만 이 함수가 실행되는 순간 memoList 에 이미 추가된 memo 의 내용이 변경된다.
   *  그러한 현상을 방지하기 위하여 getMemoJSON 함수의 return 값을 깊은 복사 형식으로 setMemo 함수에 전달해 주어야 한다
   */
  const onAddMemoHandler = () => {
    onAddMemo(memo);
    setMemo({ ...getMemoJSON("", "") });
  };
  return (
    <div className={css.main}>
      <div className={css.date}>
        <input type="date" value={memo.date} />
        <input type="time" value={memo.time} />
        <input type="button" value="새로작성" onClick={onNewMemo} />
      </div>
      <input
        type="text"
        placeholder="메모 제목"
        name="subject"
        onChange={onChangeHandler}
        value={memo.subject}
      />
      <input
        type="text"
        placeholder="메모를 입력하세요"
        name="content"
        onChange={onChangeHandler}
        value={memo.content}
      />
      <input type="button" value="추가" onClick={onAddMemoHandler} />
    </div>
  );
};
export default MemoMainLeft;
