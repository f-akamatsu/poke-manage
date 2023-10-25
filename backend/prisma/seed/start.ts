import { Pokedex, PrismaClient } from '@prisma/client';
import { v4 } from 'uuid';

const prisma = new PrismaClient();

const pokedexData: Pokedex[] = [
  { pokedex_id: v4(), name: 'フシギダネ', pokedex_no: 1  },
  { pokedex_id: v4(), name: 'ヒトカゲ',   pokedex_no: 4  },
  { pokedex_id: v4(), name: 'ゼニガメ',   pokedex_no: 7  },
  { pokedex_id: v4(), name: 'ピカチュウ', pokedex_no: 25 },
];

const doSeed = async () => {
  await prisma.pokedex.deleteMany();
  
  const pokedexList = [];
  for (const pokedex of pokedexData) {
    const createPokedex = prisma.pokedex.create({
      data: pokedex
    });
    pokedexList.push(createPokedex);
  }
  return await prisma.$transaction(pokedexList);
};

const main = async () => {
  console.log('💫 seed executing ...');

  await doSeed();

  console.log('💫 seed finished.');
};

main()
  .catch((e) => console.log(e))
  .finally(async () => {
    await prisma.$disconnect();
  });