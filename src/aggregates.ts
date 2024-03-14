import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregates = async () => {
  // find average age
  const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });

  // find sum of age
  const sumAge = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });

  // find count of age fields using aggregate -> required number field
  const countAge = await prisma.user.aggregate({
    _count: {
      age: true,
    },
  });

  // find number of records
  const countData = await prisma.user.count();

  // find max age
  const maxAge = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });

  // find min age
  const minAge = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });

  console.log(minAge);
};

aggregates();
