import { PrismaClient, Pokedex } from '@prisma-pokedex-db/client';

const prisma = new PrismaClient();
const pokedexData: Pokedex[] = [
  { pokedex_id: '0001', pokemon_name: 'フシギダネ', pokedex_no: 1  },
  { pokedex_id: '0004', pokemon_name: 'ヒトカゲ',   pokedex_no: 4  },
  { pokedex_id: '0007', pokemon_name: 'ゼニガメ',   pokedex_no: 7  },
  { pokedex_id: '0025', pokemon_name: 'ピカチュウ', pokedex_no: 25 },
];

export const doSeedPokedex = async () => {
  try {
  await prisma.pokedex.deleteMany();
    
    const pokedexList = [];
    for (const pokedex of pokedexData) {
      const createPokedex = prisma.pokedex.create({
        data: pokedex
      });
      pokedexList.push(createPokedex);
    }
    return await prisma.$transaction(pokedexList);
  } catch(e) {
    console.log(e);
  } finally {
    await prisma.$disconnect();
  }
};
