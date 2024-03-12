import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 7,
  //     },
  //     data: {
  //       title: "title 5",
  //       //   content: "content 4",
  //       //   authorName: "author 4",
  //     },
  //   });
  //   const updateMany = await prisma.post.updateMany({
  //     where: {
  //       title: "title 2",
  //     },
  //     data: {
  //       published: true,
  //     },
  //   });
  //   console.log(updateMany);

  const upsertData = await prisma.post.upsert({
    where: {
      id: 10,
    },
    update: {
      authorName: "Shahin",
    },
    create: {
      title: "title 2",
      content: "content 2",
    },
  });
  console.log(upsertData);
};

updates();
