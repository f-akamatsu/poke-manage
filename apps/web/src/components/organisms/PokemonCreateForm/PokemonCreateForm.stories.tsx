import { zodResolver } from '@hookform/resolvers/zod';
import { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import { pokemonCreateFormSchema, PokemonCreateFormSchemaType } from './PokemonCreateForm.schema';
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
  const methods = useForm<PokemonCreateFormSchemaType>({
    resolver: zodResolver(pokemonCreateFormSchema),
    mode: 'onChange',
  });
  return (
    <FormProvider {...methods}>
      <PokemonCreateFormPresenter {...args} />
    </FormProvider>
  );
};

Basic.args = {};
