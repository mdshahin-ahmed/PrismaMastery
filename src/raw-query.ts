import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rawQuery = async () => {
  // const posts = await prisma.$queryRaw`Select * from "posts" `;
  // console.log(posts);

  // delete users table data
  await prisma.$queryRaw`truncate table "categories" cascade`;
};

rawQuery();
