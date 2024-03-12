import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // find all
  const getAllFromDb = await prisma.post.findMany();

  // return find first data
  const findFirst = await prisma.post.findFirst({
    where: {
      published: true,
    },
  });

  // if did not get any data return error
  const findFirstWithError = await prisma.post.findFirstOrThrow({
    where: {
      published: false,
    },
  });

  // find unique and find unique or throw error
  // only can search with unique field
  const findUnique = await prisma.post.findUnique({
    where: {
      id: 9,
    },
    select: {
      title: true,
      content: true,
      authorName: true,
    },
  });

  console.log({ findUnique });
};

main();
