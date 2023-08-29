import { Pokemon, PrismaClient } from '@prisma/client';
import { v4 } from 'uuid';

const prisma = new PrismaClient();

const pokemonData: Pokemon[] = [
  { id: v4(), name: 'フシギダネ', pokedex_no: 1  },
  { id: v4(), name: 'ヒトカゲ',   pokedex_no: 4  },
  { id: v4(), name: 'ゼニガメ',   pokedex_no: 7  },
  { id: v4(), name: 'ピカチュウ', pokedex_no: 25 },
];

const doSeed = async () => {
  await prisma.pokemon.deleteMany();
  
  const pokemonList = [];
  for (const pokemon of pokemonData) {
    const createPokemon = prisma.pokemon.create({
      data: pokemon
    });
    pokemonList.push(createPokemon);
  }
  return await prisma.$transaction(pokemonList);
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