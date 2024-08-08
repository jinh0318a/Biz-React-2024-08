# React 2024 Project

- JS 기반의 React 도구를 사용한 Front-End Project

## React Project 생성하기

- 현재 18.x버전에서 프로젝트 생성하기
- 온라인상에서 직접 도구를 실행하여 생성하기
- `create-app-template`를 사용하여 프로젝트 구조를 생성하기

```bash
npx create-react-app [project]
```

- `blank template`를 사용하여 프로젝트 구조를 생성하기

```bash
npx create-react-app [project] --template empty
npx create-react-app [project] --template starter
```

- 17.x 이전 버전에서는 프로젝트 생성하기
- create-react-app 을 다운 받아 설치한 후 실행

```bash
npm install -g create-react-app
create-react-app [project]
```

## 추가 dependency 도구 설치하기

- React, NodeJS, JavaScript 에서 표준으로 제공하는 도구외에 별도로 필요한 도구가 있을 경우 `npmjs.com` 에서 검색하여 프로젝트에 추가하여 설치할 수 있다
- 도구를 프로젝트에 설치하는 방법
- 다음 명령을 실행하면 `npmjs.com` 에서 자동으로 다운로드하여 프로젝트에 설치해준다

```bash
npm install [도구이름]
npm i [도구이름]

npm i react-uuid
```

## git clone 한 프로젝트

- github 에서 clone 한 프로젝트는 `node_modules` 폴더가 없는 상태이다.
- `react` 등 `nodejs` 관련 프로젝트는 `node_modules` 폴더에 관련된 `dependencies` 들을 다운로드 받아야 정상적으로 실행된다.
- clone 한 프로젝트는 다음 명령을 반드시 실행해줘야 한다.
- 명령을 실행하면 `package.json` 파일의 `dependencies` 에 명시된 도구들을 `npmjs.com` 으로 부터 다운로드 받는다.

```bash
npm install
```
