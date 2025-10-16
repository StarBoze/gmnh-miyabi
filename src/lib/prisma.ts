import { PrismaClient } from '@prisma/client';

declare global {
  // グローバルなprisma変数を型宣言
  var prisma: PrismaClient | undefined;
}

// 開発環境では、既存のPrismaClientインスタンスを再利用
const prisma = global.prisma || new PrismaClient();

// 開発環境でのみ、グローバル変数にPrismaClientを保持
if (process.env.NODE_ENV === 'development') {
  global.prisma = prisma;
}

export { prisma };
