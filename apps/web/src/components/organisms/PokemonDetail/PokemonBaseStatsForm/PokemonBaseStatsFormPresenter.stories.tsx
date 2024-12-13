import { Meta, StoryObj } from '@storybook/react';
import {
  PokemonBaseStatsFormPresenter,
  PokemonBaseStatsFormPresenterProps,
} from './PokemonBaseStatsFormPresenter';

const meta: Meta<typeof PokemonBaseStatsFormPresenter> = {
  component: PokemonBaseStatsFormPresenter,
};
export default meta;

type Story = StoryObj<typeof PokemonBaseStatsFormPresenter>;

export const Default: Story = (args: PokemonBaseStatsFormPresenterProps) => {
  return <PokemonBaseStatsFormPresenter {...args} />;
};
Default.storyName = 'default';
Default.args = {};
