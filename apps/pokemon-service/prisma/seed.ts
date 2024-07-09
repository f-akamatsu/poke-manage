import { PokemonRM, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const pokemonRMData: PokemonRM[] = [];

const main = async () => {
  console.log('💫 [Pokemon] seed executing ...');

  try {
    await prisma.pokemonRM.deleteMany();
    await prisma.pokemonRM.createMany({
      data: pokemonRMData,
    });
  } catch (e) {
    console.error(e);
  } finally {
    prisma.$disconnect();
    console.log('💫 [Pokemon] seed finished.');
  }
};

main();
