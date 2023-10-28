import { PrismaClient, Move } from '@prisma-move-db/client';

const prisma = new PrismaClient();
const moveData: Move[] = [
  { move_id: '0001', move_name: 'たいあたり' },
  { move_id: '0002', move_name: 'なきごえ' },
  { move_id: '0003', move_name: 'つるのムチ' },
  { move_id: '0004', move_name: 'せいちょう' },
  { move_id: '0005', move_name: 'やどりぎのタネ' },
  { move_id: '0006', move_name: 'ひっかく' },
  { move_id: '0007', move_name: 'ひのこ' },
  { move_id: '0008', move_name: 'えんまく' },
  { move_id: '0009', move_name: 'しっぽをふる' },
  { move_id: '0010', move_name: 'みずでっぽう' },
  { move_id: '0011', move_name: 'からにこもる' },
  { move_id: '0012', move_name: 'でんきショック' },
  { move_id: '0013', move_name: 'なかよくする' },
  { move_id: '0014', move_name: 'てんしのキッス' },
  { move_id: '0015', move_name: 'ほっぺすりすり' },
  { move_id: '0016', move_name: 'わるだくみ' },
  { move_id: '0017', move_name: 'あまえる' },
  { move_id: '0018', move_name: 'でんこうせっか' },
  { move_id: '0019', move_name: 'でんじは' },
  { move_id: '0020', move_name: 'かげぶんしん' },
  { move_id: '0021', move_name: 'こうそくスピン' },
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
