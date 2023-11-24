import type { Meta, StoryObj } from '@storybook/react';
import { PokedexListPresenter, PokedexListPresenterProps } from './PokedexListPresenter';

const meta: Meta<typeof PokedexListPresenter> = {
  component: PokedexListPresenter,
};

export default meta;
type Story = StoryObj<typeof PokedexListPresenter>;

export const Basic: Story = (args: PokedexListPresenterProps) => {
  return <PokedexListPresenter {...args} />;
};

Basic.args = {
  pokedexDataList: [
    { pokedexNo: 1, pokemonName: 'フシギダネ' },
    { pokedexNo: 2, pokemonName: 'フシギソウ' },
    { pokedexNo: 3, pokemonName: 'フシギバナ' },
    { pokedexNo: 4, pokemonName: 'ヒトカゲ' },
    { pokedexNo: 5, pokemonName: 'リザード' },
    { pokedexNo: 6, pokemonName: 'リザードン' },
    { pokedexNo: 7, pokemonName: 'ゼニガメ' },
    { pokedexNo: 8, pokemonName: 'カメール' },
    { pokedexNo: 9, pokemonName: 'カメックス' },
  ],
};
