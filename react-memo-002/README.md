# Memo Project

- 한 화면에서 메모를 작성하고, 작성한 메모를 즉시 리스트로 보여주는 프로젝트

## 날짜와 UUID 를 사용하기 위하여 dependencies 설정

- JS 에서 날짜를 사용하기 위하여 여러가지 이슈가 있음.
- locale(현지 날짜)등 문제가 있는데 이러한 문제를 극복하기 위하여 JS 프로젝트에서는 `moment` 라는 도구를 거의 필수적으로 사용한다.
- JS `uuid` 값을 사용하기 위하여 여러가지 도구가 있는데 React에서는 `react-uuid` 를 많이 사용했다. 하지만 최근에 `uuid` 가 업데이트 되면서 다양한 도구를 사용한다.
- 그중에서 React 에서 사용하는 최신버전 `v7` 의 `uuid` 를 사용하기 위하여 `uuidv7` 을 사용한다.

```bash
npm install moment
npm install uuidv7
```
