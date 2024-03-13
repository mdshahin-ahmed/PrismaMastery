import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
  // fluent api -> get only post
  //   const result = await prisma.user .findUnique({
  //     where: {
  //       id: 3,
  //     },
  //   })
  //   .post();

  const result = await prisma.user.findUnique({
    where: {
      id: 3,
    },
    include: {
      post: true,
    },
  });

  // relational filters
  const publishedPostUser = await prisma.user.findMany({
    include: {
      post: {
        where: {
          published: true,
        },
      },
    },
  });

  console.dir(publishedPostUser, { depth: Infinity });
};

relationalQueries();
