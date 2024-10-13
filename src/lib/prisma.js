import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

if (typeof global.prismaGlobal === 'undefined') {
  global.prismaGlobal = prismaClientSingleton();
}

export const prisma = global.prismaGlobal;

