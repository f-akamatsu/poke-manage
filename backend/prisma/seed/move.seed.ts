import { PrismaClient, Move } from '@prisma-move-db/client';
import { v4 } from 'uuid';

const prisma = new PrismaClient();
const moveData: Move[] = [
  { move_id: v4(), move_name: 'たいあたり' },
  { move_id: v4(), move_name: 'ひのこ' },
  { move_id: v4(), move_name: 'あわ' },
  { move_id: v4(), move_name: 'つるのムチ' },
  { move_id: v4(), move_name: 'でんきショック' },
];

export const doSeedMove = async () => {
  try {
  await prisma.move.deleteMany();
    
    const moveList = [];
    for (const move of moveData) {
      const createMove = prisma.move.create({
        data: move
      });
      moveList.push(createMove);
    }
    return await prisma.$transaction(moveList);
  } catch(e) {
    console.log(e);
  } finally {
    await prisma.$disconnect();
  }
};
