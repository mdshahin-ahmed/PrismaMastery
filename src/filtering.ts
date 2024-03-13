import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "title",
          },
        },
        // {
        //   published: true,
        // },
      ],
    },
  });

  const startWithFiltering = await prisma.user.findMany({
    where: {
      email: {
        startsWith: "user1",
      },
    },
  });

  const endsWithFiltering = await prisma.user.findMany({
    where: {
      email: {
        endsWith: ".com",
      },
    },
  });

  const equalWithFiltering = await prisma.user.findMany({
    where: {
      email: {
        equals: "user1@yopmail.com",
      },
    },
  });

  const userNameArray = ["user1", "user2", "user3"];

  const userNamesArray = await prisma.user.findMany({
    where: {
      username: {
        in: userNameArray,
      },
    },
  });

  const inDepthData = await prisma.user.findUnique({
    where: {
      id: 3,
    },
    include: {
      post: {
        include: {
          postCategory: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  });

  console.dir(inDepthData, { depth: Infinity });
};

filtering();
