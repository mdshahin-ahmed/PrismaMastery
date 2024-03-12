import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // create data into db

  //   const result = await prisma.post.create({
  //     data: {
  //       title: "This is title2!",
  //       content: "This is content...2",
  //       authorName: "Shahin2",
  //     },
  //   });
  //   console.log(result);

  // create many
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "title 1",
        content: "content 1",
        authorName: "author 1",
      },
      {
        title: "title 2",
        content: "content 2",
        authorName: "author 2",
      },
      {
        title: "title 3",
        content: "content 3",
        authorName: "author 3",
      },
    ],
  });
  console.log(createMany);
};

main();
