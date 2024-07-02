'use client';

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { PokemonFormSchemaType, pokemonFormSchema } from './Pokemon.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { PokemonPresenter } from './PokemonPresenter';
import { graphql } from '@/gql/__generated__';
import { useMutation, useQuery } from 'urql';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/** Query */
const FindPokemonQuery = graphql(/* GraphQL */ `
  query FindPokemon($id: String!) {
    findPokemon(id: $id) {
      name
      pokedexNo
    }
  }
`);

/** Mutation (Update) */
const UpdatePokemon = graphql(/* GraphQL */ `
  mutation UpdatePokemon($input: UpdatePokemonInput!) {
    updatePokemon(input: $input) {
      pokemonId
    }
  }
`);

/** Mutation (Create) */
const CreatePokemon = graphql(/* GraphQL */ `
  mutation CreatePokemon($input: CreatePokemonInput!) {
    createPokemon(input: $input) {
      pokemonId
    }
  }
`);

export interface PokemonProps {
  pokemonId?: string;
}

export function Pokemon({ pokemonId }: PokemonProps) {
  const router = useRouter();

  // React Hook Form
  const methods = useForm<PokemonFormSchemaType>({ resolver: zodResolver(pokemonFormSchema) });
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  // Init Value
  const [findResult] = useQuery({
    query: FindPokemonQuery,
    variables: { id: pokemonId ?? '' }, // 🤔
    pause: !pokemonId,
  });
  const { data } = findResult;
  useEffect(() => {
    if (data && data.findPokemon) {
      reset({ name: data.findPokemon.name, pokedexNo: data.findPokemon.pokedexNo });
    }
  }, [data, reset, pokemonId]);

  // Mutation (Update)
  const [updateResult, executeUpdate] = useMutation(UpdatePokemon);
  const { fetching: updateFetching } = updateResult;

  // Mutation (Create)
  const [createResult, executeCreate] = useMutation(CreatePokemon);
  const { fetching: createFetching } = createResult;

  const fetching = updateFetching || createFetching;

  /** 保存処理 */
  const onSubmit: SubmitHandler<PokemonFormSchemaType> = async (data) => {
    if (pokemonId) {
      await executeUpdate({
        input: {
          pokemonId,
          name: data.name,
          pokedexNo: data.pokedexNo,
        },
      });
    } else {
      const _createResult = await executeCreate({
        input: {
          name: data.name,
          pokedexNo: data.pokedexNo,
        },
      });

      router.push(`/pokemon/${_createResult.data?.createPokemon.pokemonId}`);
    }
  };

  return (
    <FormProvider {...methods}>
      <PokemonPresenter onSubmit={handleSubmit(onSubmit)} isFetching={fetching} />
    </FormProvider>
  );
}
