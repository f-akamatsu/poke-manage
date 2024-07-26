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
    { pokemonId: '', pokedexNo: 1, name: 'フシギダネ' },
    { pokemonId: '', pokedexNo: 2, name: 'フシギソウ' },
    { pokemonId: '', pokedexNo: 3, name: 'フシギバナ' },
    { pokemonId: '', pokedexNo: 4, name: 'ヒトカゲ' },
    { pokemonId: '', pokedexNo: 5, name: 'リザード' },
    { pokemonId: '', pokedexNo: 6, name: 'リザードン' },
    { pokemonId: '', pokedexNo: 7, name: 'ゼニガメ' },
    { pokemonId: '', pokedexNo: 8, name: 'カメール' },
    { pokemonId: '', pokedexNo: 9, name: 'カメックス' },
  ].map((pokemon) => makeFragmentData(pokemon, PokemonFieldsFragment)),
};
