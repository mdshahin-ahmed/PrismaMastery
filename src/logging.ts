import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", (e) => {
  console.log("query :", e.query);
  console.log("duration :", e.duration, "ms");
  console.log("timestamp :", e.timestamp);
});

const main = async () => {
  const getAllFromDB = await prisma.post.findMany();
  //   console.log(getAllFromDB);
};

main();
