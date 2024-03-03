import { PrismaClient, MoveByLevelUp } from '@prisma-pokedex-db/client';

const prisma = new PrismaClient();
const moveByLevelUpData: MoveByLevelUp[] = [
  { pokedex_id: '0001', move_id: '0001', level: 0 },
  { pokedex_id: '0001', move_id: '0002', level: 0 },
  { pokedex_id: '0001', move_id: '0003', level: 3 },
  { pokedex_id: '0001', move_id: '0004', level: 6 },
  { pokedex_id: '0001', move_id: '0005', level: 9 },
  { pokedex_id: '0004', move_id: '0006', level: 0 },
  { pokedex_id: '0004', move_id: '0002', level: 0 },
  { pokedex_id: '0004', move_id: '0007', level: 4 },
  { pokedex_id: '0004', move_id: '0008', level: 8 },
  { pokedex_id: '0007', move_id: '0001', level: 0 },
  { pokedex_id: '0007', move_id: '0009', level: 0 },
  { pokedex_id: '0007', move_id: '0010', level: 3 },
  { pokedex_id: '0007', move_id: '0011', level: 6 },
  { pokedex_id: '0007', move_id: '0021', level: 9 },
  { pokedex_id: '0025', move_id: '0009', level: 0 },
  { pokedex_id: '0025', move_id: '0012', level: 0 },
  { pokedex_id: '0025', move_id: '0002', level: 0 },
  { pokedex_id: '0025', move_id: '0013', level: 0 },
  { pokedex_id: '0025', move_id: '0014', level: 0 },
  { pokedex_id: '0025', move_id: '0015', level: 0 },
  { pokedex_id: '0025', move_id: '0016', level: 0 },
  { pokedex_id: '0025', move_id: '0017', level: 0 },
  { pokedex_id: '0025', move_id: '0018', level: 0 },
  { pokedex_id: '0025', move_id: '0019', level: 4 },
  { pokedex_id: '0025', move_id: '0020', level: 8 },
];

export const doSeedMoveByLevelUp = async () => {
  try {
  await prisma.moveByLevelUp.deleteMany();
    
    const moveByLevelUpList = [];
    for (const moveByLevelUp of moveByLevelUpData) {
      const createMoveByLevelUp = prisma.moveByLevelUp.create({
        data: moveByLevelUp
      });
      moveByLevelUpList.push(createMoveByLevelUp);
    }
    return await prisma.$transaction(moveByLevelUpList);
  } catch(e) {
    console.log(e);
  } finally {
    await prisma.$disconnect();
  }
};
