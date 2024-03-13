import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const createUser = await prisma.user.create({
  //     data: {
  //       username: "user2",
  //       email: "user2@yopmail.com",
  //       role: UserRole.user,
  //     },
  //   });

  const createProfile = await prisma.profile.create({
    data: {
      bio: "this is bio...",
      userId: 1,
    },
  });

  console.log(createProfile);
};

main();
