import { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import {
  PokemonBaseStatsFormPresenter,
  PokemonBaseStatsFormPresenterProps,
} from './PokemonBaseStatsFormPresenter';
import { PokemonBaseStatsFormSchemaType } from './PokemonBaseStatsFormSchema';

const meta: Meta<typeof PokemonBaseStatsFormPresenter> = {
  component: PokemonBaseStatsFormPresenter,
};
export default meta;

type Story = StoryObj<typeof PokemonBaseStatsFormPresenter>;

export const Default: Story = (args: PokemonBaseStatsFormPresenterProps) => {
  const methods = useForm<PokemonBaseStatsFormSchemaType>();
  return (
    <FormProvider {...methods}>
      <PokemonBaseStatsFormPresenter {...args} />
    </FormProvider>
  );
};
Default.storyName = 'default';
Default.args = {};
