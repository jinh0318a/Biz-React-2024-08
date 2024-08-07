import uuid from "react-uuid";
/**
 * todo 내용을 매개변수로 받고
 * 현재 날짜와 현재시각이 포함된 JSON 데이터를 변환하여
 * return 하는 함수
 */

export const getTodo = (todo) => {
  /**
   * JS에서 Date 클래스를 사용하여 날짜를 getter 하면
   * UTC 표준시가 된다
   * 우리나라 표준시로 변경하기 위해서 시차를 구하는 함수를 사용해서
   * 다시 계산해주어야 한다
   */

  // utc 표준시를 만들어주는 객체
  const utc = new Date();

  // getTimezoneOffset() : 현재 시스템의 시간과 UTC 표준시와의 차이를 알려주는 함수
  const offset = utc.getTimezoneOffset() * 60000;
  const today = new Date(utc.getTime() - offset);

  // Date 객체를 날짜와 시간으로 나눔
  const mDate = today.toISOString().split("T")[0];
  const mTime = today.toISOString().split("T")[1].split(".")[0];

  const result = {
    id: uuid(),
    sdate: mDate,
    stime: mTime,
    content: todo,
    complete: false,
  };
  return result;
};
