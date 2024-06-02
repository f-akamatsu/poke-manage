import { PokemonRM, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const pokemonRMData: PokemonRM[] = [
  {
    id: '00000000-0000-0000-0000-000000000001',
    pokedex_no: 1,
    name: 'フシギダネ',
  },
  {
    id: '00000000-0000-0000-0000-000000000002',
    pokedex_no: 2,
    name: 'フシギソウ',
  },
  {
    id: '00000000-0000-0000-0000-000000000003',
    pokedex_no: 3,
    name: 'フシギバナ',
  },
  {
    id: '00000000-0000-0000-0000-000000000004',
    pokedex_no: 4,
    name: 'ヒトカゲ',
  },
  {
    id: '00000000-0000-0000-0000-000000000005',
    pokedex_no: 5,
    name: 'リザード',
  },
  {
    id: '00000000-0000-0000-0000-000000000006',
    pokedex_no: 6,
    name: 'リザードン',
  },
  {
    id: '00000000-0000-0000-0000-000000000007',
    pokedex_no: 7,
    name: 'ゼニガメ',
  },
  {
    id: '00000000-0000-0000-0000-000000000008',
    pokedex_no: 8,
    name: 'カメール',
  },
  {
    id: '00000000-0000-0000-0000-000000000009',
    pokedex_no: 9,
    name: 'カメックス',
  },
  {
    id: '00000000-0000-0000-0000-000000000010',
    pokedex_no: 10,
    name: 'キャタピー',
  },
  {
    id: '00000000-0000-0000-0000-000000000011',
    pokedex_no: 11,
    name: 'トランセル',
  },
  {
    id: '00000000-0000-0000-0000-000000000012',
    pokedex_no: 12,
    name: 'バタフリー',
  },
  {
    id: '00000000-0000-0000-0000-000000000013',
    pokedex_no: 13,
    name: 'ビードル',
  },
  {
    id: '00000000-0000-0000-0000-000000000014',
    pokedex_no: 14,
    name: 'コクーン',
  },
  {
    id: '00000000-0000-0000-0000-000000000015',
    pokedex_no: 15,
    name: 'スピアー',
  },
  {
    id: '00000000-0000-0000-0000-000000000016',
    pokedex_no: 16,
    name: 'ポッポ',
  },
  {
    id: '00000000-0000-0000-0000-000000000017',
    pokedex_no: 17,
    name: 'ピジョン',
  },
  {
    id: '00000000-0000-0000-0000-000000000018',
    pokedex_no: 18,
    name: 'ピジョット',
  },
  {
    id: '00000000-0000-0000-0000-000000000019',
    pokedex_no: 19,
    name: 'コラッタ',
  },
  {
    id: '00000000-0000-0000-0000-000000000020',
    pokedex_no: 20,
    name: 'ラッタ',
  },
  {
    id: '00000000-0000-0000-0000-000000000021',
    pokedex_no: 21,
    name: 'オニスズメ',
  },
  {
    id: '00000000-0000-0000-0000-000000000022',
    pokedex_no: 22,
    name: 'オニドリル',
  },
  {
    id: '00000000-0000-0000-0000-000000000023',
    pokedex_no: 23,
    name: 'アーボ',
  },
  {
    id: '00000000-0000-0000-0000-000000000024',
    pokedex_no: 24,
    name: 'アーボック',
  },
  {
    id: '00000000-0000-0000-0000-000000000025',
    pokedex_no: 25,
    name: 'ピカチュウ',
  },
  {
    id: '00000000-0000-0000-0000-000000000026',
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
