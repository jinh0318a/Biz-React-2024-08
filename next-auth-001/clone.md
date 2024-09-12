# github 에서 clone 한 프로젝트 시작하기

- `next-auth` 와 `prisma` 가 적용된 프로젝트 clone 한 후 시작하기
- `next-auth` 의 `Secret Key` 생성하기

```bash
npx auth secret
```

- `.env.local` 파일이 생성되었는지 확인. 이 key 는 외부에 노출 금지

- DB 연결을 위한 Database URL 설정하기 : `.env.local` 파일에 다음코드 작성

```
DATABASE_URL="mysql://USER_DB_ID:USER_DB_PASSWORD@localhost:3306/mydb"
```

- prisma 와 DB 연결 재설정
- 사전작업

```bash
# npm 업그레이드
npm install -g npm
# node_modules 다운로드
npm install
```

-prisma 연결작업

```bash
npx prisma generate
```

- 연결작업에서 오류가 발생하는 경우

```bash
# node_modules 폴더 삭제
rm -rf node_modules
npm install -g npm
npm install
npx prisma generate
```
