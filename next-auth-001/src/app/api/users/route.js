import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export const GET = async (req) => {
  const users = await db.tbl_users.findMany();
  await db.$disconnect();
  /**
   *  JSON.stringify(JSON_객체)
   *    JSON_객체 데이터를 문자열화 하는것
   *    Serialize 화 한다
   *
   *  JSON.parse(문자열)
   *    JSON 형식의 문자열을 JSON 데이터로 역직렬화 하는것
   */

  const response = new Response(JSON.stringify(users), {
    headers: { "Content-Type": "application/json;charset=UTF-8" },
  });

  return response;
};
