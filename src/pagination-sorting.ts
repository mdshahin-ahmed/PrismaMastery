import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSorting = async () => {
  // offset pagination
  const offsetData = await prisma.post.findMany({
    skip: 5,
    take: 2,
  });
  //   console.log({ offsetData });

  // cursor based pagination
  const cursorData = await prisma.post.findMany({
    skip: 5,
    take: 2,
    cursor: {
      id: 15,
    },
  });
  //   console.log({ cursorData });

  // sort
  const sortedData = await prisma.post.findMany({
    orderBy: {
      id: "desc",
    },
    skip: 2,
    take: 2,
    where: {
      title: "title 1",
    },
  });
  console.log(sortedData);
};

paginationSorting();
