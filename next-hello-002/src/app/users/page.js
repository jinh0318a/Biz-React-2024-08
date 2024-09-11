/*
 React 기반의 NextJS 프로젝트에서 주의 할점

 React 의 컴포넌트(함수)는 기본이 client 환경이다
 client 환경에서는 useState, useEffect, useCallback 등을 사용하여 프로젝트를 진행한다.
 외부로부터 데이터를 가져올때 hook 함수를 통하여 가져온다.
 기본 컴포넌트 함수는 async, await 를 붙이면 안된다.

 NextJS 의 컴포넌트는 기본이 server 환경이다.
 server 환경에서는 use Hook 함수를 사용할 수 없다.
 외부로 부터 데이터를 가져올때 hook 함수를 통하지 않고 직접 가져올 수 있다.

 기본 컴포넌트 함수에 async await 를 붙일 수 있다.

 NextJS 컴포넌트에서 use Hook 함수를 사용하려면 코드의 상단에 "use client" 라는 커멘트를 붙여줘야 한다.

*/

import { userSelectAll } from "@/app/api/user";

const UserPage = async () => {
  const users = await userSelectAll();

  const userList = users.map((user) => <li>{user.username}</li>);
  return <ul>{userList}</ul>;
};

export default UserPage;
