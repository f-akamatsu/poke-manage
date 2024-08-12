import { FormProvider, useForm } from 'react-hook-form';
import { PokemonCreateFormPresenter } from './PokemonCreateFormPresenter';
import { pokemonCreateFormSchema, PokemonCreateFormSchemaType } from './PokemonCreateForm.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { graphql } from '@/gql/__generated__';
import { useMutation } from 'urql';
import { useRouter } from 'next/navigation';
import { useToast } from '@chakra-ui/react';
import { useEffect } from 'react';

/** Mutation */
const CreatePokemonMutation = graphql(/* GraphQL */ `
  mutation CreatePokemon($input: CreatePokemonInput!) {
    createPokemon(input: $input) {
      pokemonId
    }
  }
`);

export interface PokemonCreateFormProps {}

export function PokemonCreateForm({}: PokemonCreateFormProps) {
  const router = useRouter();
  const toast = useToast();

  // React Hook Form
  const methods = useForm<PokemonCreateFormSchemaType>({
    resolver: zodResolver(pokemonCreateFormSchema),
    mode: 'onChange',
  });
  const { watch, trigger } = methods;

  // タイプ2重複エラー、タイプ1の値を変えたときにも検証しなおしてほしいため
  useEffect(() => {
    trigger('type2');
  }, [watch('type1')]);

  // Mutation
  const [createResult, executeCreate] = useMutation(CreatePokemonMutation);
  const { fetching } = createResult;

  /** 保存処理 */
  const onSubmit = async (data: PokemonCreateFormSchemaType) => {
    const _createResult = await executeCreate({
      input: {
        name: data.name,
        pokedexNo: data.pokedexNo,
        typeId1: data.type1.value,
        typeId2: data.type2?.value ?? undefined,
      },
    });

    toast({ status: 'success', description: '登録しました' });
    router.push(`/pokemon/${_createResult.data?.createPokemon.pokemonId}`);
  };

  return (
    <FormProvider {...methods}>
      <PokemonCreateFormPresenter onSubmit={onSubmit} isFetching={fetching} />
    </FormProvider>
  );
}
