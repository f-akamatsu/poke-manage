import { makeFragmentData } from '@/gql/__generated__';
import { Type } from '@packages/common-enum';
import { Meta, StoryObj } from '@storybook/react';
import { PokemonCard, PokemonCardFieldsFragment, PokemonCardProps } from './PokemonCard';

const meta: Meta<typeof PokemonCard> = {
  component: PokemonCard,
};

export default meta;
type Story = StoryObj<typeof PokemonCard>;

export const Default: Story = (args: PokemonCardProps) => {
  return <PokemonCard {...args} />;
};
Default.storyName = 'default';
Default.args = {
  pokemonFragment: makeFragmentData(
    {
      pokemonId: '',
      pokedexNo: 1,
      name: 'フシギダネ',
      typeId1: Type.GRASS.id,
      typeId2: Type.POISON.id,
    },
    PokemonCardFieldsFragment
  ),
};
