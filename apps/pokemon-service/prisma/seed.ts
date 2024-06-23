import { PokemonRM, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const pokemonRMData: PokemonRM[] = [
  {
    pokemon_id: '000000000000000000000001',
    pokedex_no: 1,
    name: 'フシギダネ',
  },
  {
    pokemon_id: '000000000000000000000002',
    pokedex_no: 2,
    name: 'フシギソウ',
  },
  {
    pokemon_id: '000000000000000000000003',
    pokedex_no: 3,
    name: 'フシギバナ',
  },
  {
    pokemon_id: '000000000000000000000004',
    pokedex_no: 4,
    name: 'ヒトカゲ',
  },
  {
    pokemon_id: '000000000000000000000005',
    pokedex_no: 5,
    name: 'リザード',
  },
  {
    pokemon_id: '000000000000000000000006',
    pokedex_no: 6,
    name: 'リザードン',
  },
  {
    pokemon_id: '000000000000000000000007',
    pokedex_no: 7,
    name: 'ゼニガメ',
  },
  {
    pokemon_id: '000000000000000000000008',
    pokedex_no: 8,
    name: 'カメール',
  },
  {
    pokemon_id: '000000000000000000000009',
    pokedex_no: 9,
    name: 'カメックス',
  },
  {
    pokemon_id: '000000000000000000000010',
    pokedex_no: 10,
    name: 'キャタピー',
  },
  {
    pokemon_id: '000000000000000000000011',
    pokedex_no: 11,
    name: 'トランセル',
  },
  {
    pokemon_id: '000000000000000000000012',
    pokedex_no: 12,
    name: 'バタフリー',
  },
  {
    pokemon_id: '000000000000000000000013',
    pokedex_no: 13,
    name: 'ビードル',
  },
  {
    pokemon_id: '000000000000000000000014',
    pokedex_no: 14,
    name: 'コクーン',
  },
  {
    pokemon_id: '000000000000000000000015',
    pokedex_no: 15,
    name: 'スピアー',
  },
  {
    pokemon_id: '000000000000000000000016',
    pokedex_no: 16,
    name: 'ポッポ',
  },
  {
    pokemon_id: '000000000000000000000017',
    pokedex_no: 17,
    name: 'ピジョン',
  },
  {
    pokemon_id: '000000000000000000000018',
    pokedex_no: 18,
    name: 'ピジョット',
  },
  {
    pokemon_id: '000000000000000000000019',
    pokedex_no: 19,
    name: 'コラッタ',
  },
  {
    pokemon_id: '000000000000000000000020',
    pokedex_no: 20,
    name: 'ラッタ',
  },
  {
    pokemon_id: '000000000000000000000021',
    pokedex_no: 21,
    name: 'オニスズメ',
  },
  {
    pokemon_id: '000000000000000000000022',
    pokedex_no: 22,
    name: 'オニドリル',
  },
  {
    pokemon_id: '000000000000000000000023',
    pokedex_no: 23,
    name: 'アーボ',
  },
  {
    pokemon_id: '000000000000000000000024',
    pokedex_no: 24,
    name: 'アーボック',
  },
  {
    pokemon_id: '000000000000000000000025',
    pokedex_no: 25,
    name: 'ピカチュウ',
  },
  {
    pokemon_id: '000000000000000000000026',
    pokedex_no: 26,
    name: 'ライチュウ',
  },
];

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
