import { Meta, StoryObj } from '@storybook/react';
import {
  PokemonCreateFormPresenter,
  PokemonCreateFormPresenterProps,
} from './PokemonCreateFormPresenter';

const meta: Meta<typeof PokemonCreateFormPresenter> = {
  component: PokemonCreateFormPresenter,
};

export default meta;
type Story = StoryObj<typeof PokemonCreateFormPresenter>;

export const Basic: Story = (args: PokemonCreateFormPresenterProps) => {
  return <PokemonCreateFormPresenter {...args} />;
};

Basic.args = {};
