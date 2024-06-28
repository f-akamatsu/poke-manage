import type { Meta, StoryObj } from '@storybook/react';
import {
  PokemonFieldsFragment,
  PokemonListPresenter,
  PokemonListPresenterProps,
} from './PokemonListPresenter';
import { makeFragmentData } from '@/gql/__generated__';

const meta: Meta<typeof PokemonListPresenter> = {
  component: PokemonListPresenter,
};

export default meta;
type Story = StoryObj<typeof PokemonListPresenter>;

export const Basic: Story = (args: PokemonListPresenterProps) => {
  return <PokemonListPresenter {...args} />;
};

Basic.args = {
  pokemonFragments: [
    { pokedexNo: 1, name: 'フシギダネ' },
    { pokedexNo: 2, name: 'フシギソウ' },
    { pokedexNo: 3, name: 'フシギバナ' },
    { pokedexNo: 4, name: 'ヒトカゲ' },
    { pokedexNo: 5, name: 'リザード' },
    { pokedexNo: 6, name: 'リザードン' },
    { pokedexNo: 7, name: 'ゼニガメ' },
    { pokedexNo: 8, name: 'カメール' },
    { pokedexNo: 9, name: 'カメックス' },
  ].map((pokemon) => makeFragmentData(pokemon, PokemonFieldsFragment)),
};
