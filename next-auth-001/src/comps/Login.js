"use client";

import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
/**
 *
 * event 핸들러에서 페이지 변경하기
 * Link 컴포넌트는 a tag 와 같이 직접 링크를 클릭하여 다른페이지로 변경한다
 * 하지마 event 핸들러나 함수 코드 내에서는 Link 컴포넌트를 사용할 수 없다
 * 이때는 useRouter hook 을 사용해서 페이지를 변경할 수 있다.
 *
 * 주의 : nextjs 14 이상에서는 "next/router" 를 import 하지말고 next/navigation 을 import 해야함
 */

const LoginComps = () => {
  const [users, setUsers] = useState([]);
  const router = useRouter();
  const userRequest = useCallback(() => {
    (async () => {
      const res = await fetch("/api/users");
      const users = await res.json();

      setUsers([...users]);
    })();
  }, []);

  const btnStyle = {
    display: "block",
    width: "500px",
    margin: "0 auto",
    padding: "5px",
    borderRadius: "5px",
    cursor: "pointer",
    border: "1px solid green",
    textAlign: "center",
  };

  const userJoinReq = useCallback(() => {
    // /users/join 으로 document.location.href = "/users/join"
    router.push("/users/join");
  });

  /**
   *  List, 배열 데이터를 화면에 그리고자 할때는
   *  각 아이템에 key={유일한 값} 속성을 추가해 주어야 한다
   *  그렇지 않으면 React 는 계속해서 경고를 보인다
   */
  const usersList = users.map((user) => (
    <li key={user.username}>{user.username}</li>
  ));

  return (
    <>
      <div style={btnStyle} onClick={userJoinReq}>
        회원가입
      </div>
      <div style={btnStyle} onClick={() => signIn("github")}>
        github 로그인
      </div>
      <div style={btnStyle} onClick={() => signIn("google")}>
        google 로그인
      </div>
      <div style={btnStyle} onClick={userRequest}>
        User 데이터 요청 테스트
      </div>
      <ul>{usersList}</ul>
    </>
  );
};
export default LoginComps;
