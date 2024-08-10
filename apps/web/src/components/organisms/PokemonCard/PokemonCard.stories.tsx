import { Meta, StoryObj } from '@storybook/react';
import {
  PokemonCardFieldsFragment,
  PokemonCardPresenter,
  PokemonCardPresenterProps,
} from './PokemonCardPresenter';
import { makeFragmentData } from '@/gql/__generated__';
import { Type } from '@packages/common-enum';

const meta: Meta<typeof PokemonCardPresenter> = {
  component: PokemonCardPresenter,
};

export default meta;
type Story = StoryObj<typeof PokemonCardPresenter>;

export const Basic: Story = (args: PokemonCardPresenterProps) => {
  return <PokemonCardPresenter {...args} />;
};

Basic.args = {
  pokemonFragment: makeFragmentData(
    {
      pokemonId: '',
      pokedexNo: 151,
      name: 'ミュウ',
      typeId1: Type.PSYCHIC.id,
    },
    PokemonCardFieldsFragment
  ),
};
