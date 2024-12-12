import { makeFragmentData } from '@/gql/__generated__';
import { Type } from '@packages/common-enum';
import { Meta, StoryObj } from '@storybook/react';
import { PokemonCardFieldsFragment } from '../PokemonCard';
import {
  PokemonCardListPresenter,
  PokemonCardListPresenterProps,
} from './PokemonCardListPresenter';

const meta: Meta<typeof PokemonCardListPresenter> = {
  component: PokemonCardListPresenter,
};

export default meta;
type Story = StoryObj<typeof PokemonCardListPresenter>;

export const Default: Story = (args: PokemonCardListPresenterProps) => {
  return <PokemonCardListPresenter {...args} />;
};
Default.storyName = 'default';
Default.args = {
  pokemonFragments: [
    {
      pokemonId: '',
      pokedexNo: 1,
      name: 'フシギダネ',
      typeId1: Type.GRASS.id,
      typeId2: Type.POISON.id,
    },
    {
      pokemonId: '',
      pokedexNo: 2,
      name: 'フシギソウ',
      typeId1: Type.GRASS.id,
      typeId2: Type.POISON.id,
    },
    {
      pokemonId: '',
      pokedexNo: 3,
      name: 'フシギバナ',
      typeId1: Type.GRASS.id,
      typeId2: Type.POISON.id,
    },
    {
      pokemonId: '',
      pokedexNo: 4,
      name: 'ヒトカゲ',
      typeId1: Type.FIRE.id,
    },
    {
      pokemonId: '',
      pokedexNo: 5,
      name: 'リザード',
      typeId1: Type.FIRE.id,
    },
    {
      pokemonId: '',
      pokedexNo: 6,
      name: 'リザードン',
      typeId1: Type.FIRE.id,
      typeId2: Type.FLYING.id,
    },
    {
      pokemonId: '',
      pokedexNo: 7,
      name: 'ゼニガメ',
      typeId1: Type.WATER.id,
    },
    {
      pokemonId: '',
      pokedexNo: 8,
      name: 'カメール',
      typeId1: Type.WATER.id,
    },
    {
      pokemonId: '',
      pokedexNo: 9,
      name: 'カメックス',
      typeId1: Type.WATER.id,
    },
    {
      pokemonId: '',
      pokedexNo: 10,
      name: 'キャタピー',
      typeId1: Type.BUG.id,
    },
    {
      pokemonId: '',
      pokedexNo: 11,
      name: 'トランセル',
      typeId1: Type.BUG.id,
    },
    {
      pokemonId: '',
      pokedexNo: 12,
      name: 'バタフリー',
      typeId1: Type.BUG.id,
      typeId2: Type.FLYING.id,
    },
    {
      pokemonId: '',
      pokedexNo: 13,
      name: 'ビードル',
      typeId1: Type.BUG.id,
      typeId2: Type.POISON.id,
    },
    {
      pokemonId: '',
      pokedexNo: 14,
      name: 'コクーン',
      typeId1: Type.BUG.id,
      typeId2: Type.POISON.id,
    },
    {
      pokemonId: '',
      pokedexNo: 15,
      name: 'スピアー',
      typeId1: Type.BUG.id,
      typeId2: Type.POISON.id,
    },
    {
      pokemonId: '',
      pokedexNo: 16,
      name: 'ポッポ',
      typeId1: Type.NORMAL.id,
      typeId2: Type.FLYING.id,
    },
    {
      pokemonId: '',
      pokedexNo: 17,
      name: 'ピジョン',
      typeId1: Type.NORMAL.id,
      typeId2: Type.FLYING.id,
    },
    {
      pokemonId: '',
      pokedexNo: 18,
      name: 'ピジョット',
      typeId1: Type.NORMAL.id,
      typeId2: Type.FLYING.id,
    },
    {
      pokemonId: '',
      pokedexNo: 19,
      name: 'コラッタ',
      typeId1: Type.NORMAL.id,
    },
    {
      pokemonId: '',
      pokedexNo: 20,
      name: 'ラッタ',
      typeId1: Type.NORMAL.id,
    },
    {
      pokemonId: '',
      pokedexNo: 21,
      name: 'オニスズメ',
      typeId1: Type.NORMAL.id,
      typeId2: Type.FLYING.id,
    },
    {
      pokemonId: '',
      pokedexNo: 22,
      name: 'オニドリル',
      typeId1: Type.NORMAL.id,
      typeId2: Type.FLYING.id,
    },
    {
      pokemonId: '',
      pokedexNo: 23,
      name: 'アーボ',
      typeId1: Type.POISON.id,
    },
    {
      pokemonId: '',
      pokedexNo: 24,
      name: 'アーボック',
      typeId1: Type.POISON.id,
    },
    {
      pokemonId: '',
      pokedexNo: 25,
      name: 'ピカチュウ',
      typeId1: Type.ELECTRIC.id,
    },
    {
      pokemonId: '',
      pokedexNo: 26,
      name: 'ライチュウ',
      typeId1: Type.ELECTRIC.id,
    },
  ].map((pokemon) => makeFragmentData(pokemon, PokemonCardFieldsFragment)),
};
