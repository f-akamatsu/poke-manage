import { FormProvider, useForm } from 'react-hook-form';
import { PokemonCreateFormPresenter } from './PokemonCreateFormPresenter';
import { pokemonCreateFormSchema, PokemonCreateFormSchemaType } from './PokemonCreateForm.schema';
import { zodResolver } from '@hookform/resolvers/zod';

export interface PokemonCreateFormProps {}

export function PokemonCreateForm({}: PokemonCreateFormProps) {
  // React Hook Form
  const methods = useForm<PokemonCreateFormSchemaType>({
    resolver: zodResolver(pokemonCreateFormSchema),
    mode: 'onChange',
  });

  /** 保存処理 */
  const onSubmit = async (data: PokemonCreateFormSchemaType) => {};

  console.log(methods.formState.errors);

  return (
    <FormProvider {...methods}>
      <PokemonCreateFormPresenter onSubmit={onSubmit} isFetching={false} />
    </FormProvider>
  );
}
