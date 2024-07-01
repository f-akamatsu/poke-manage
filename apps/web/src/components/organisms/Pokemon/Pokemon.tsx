import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { PokemonFormSchemaType, pokemonFormSchema } from './Pokemon.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { PokemonPresenter } from './PokemonPresenter';

export interface PokemonProps {
  pokemonId?: string;
}

export function Pokemon({ pokemonId }: PokemonProps) {
  const methods = useForm<PokemonFormSchemaType>({ resolver: zodResolver(pokemonFormSchema) });
  const {
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<PokemonFormSchemaType> = async (data) => {
    // 保存処理
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <PokemonPresenter onSubmit={handleSubmit(onSubmit)} />
    </FormProvider>
  );
}
