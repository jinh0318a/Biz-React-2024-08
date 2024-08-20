// uuidv7 을 import 하여 uuid 라는 이름으로 사용하겠다
import { uuidv7 as uuid } from "uuidv7";
import moment from "moment";

export const getMemoJSON = (subject, memo) => {
  const json = {
    id: uuid(),
    date: moment().format("yyyy-MM-DD"),
    time: moment().format("HH:mm:ss"),
    subject: subject,
    content: memo,
    complete: false,
  };
  return json;
};

// 샘플 메모 생성
export const getSampleMemos = () => {
  const subject = ["안녕", "반가워", "또 만나"];
  const memos = [];
  for (let i = 0; i < 50; i++) {
    memos.push(getMemoJSON(subject[i % 3], "내용"));
  }

  return memos;
};
