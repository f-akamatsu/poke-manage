import { useToast } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useMutation } from 'urql';
import { FragmentType, getFragmentData, graphql } from '../../../../gql/__generated__';
import { PokemonBaseStatsFormPresenter } from './PokemonBaseStatsFormPresenter';
import {
  pokemonBaseStatsFormSchema,
  PokemonBaseStatsFormSchemaType,
} from './PokemonBaseStatsFormSchema';

/** 種族値フォーム フラグメント */
export const PokemonBaseStatsFormFragment = graphql(/* GraphQL */ `
  fragment PokemonBaseStatsFormFields on Pokemon {
    pokemonId
    hitPoints
    attack
    defense
    spAttack
    spDefense
    speed
  }
`);

/** Mutation */
const UpdatePokemonBaseStatsMutation = graphql(/* GraphQL */ `
  mutation UpdatePokemonBaseStats($input: UpdatePokemonBaseStatsInput!) {
    updatePokemonBaseStats(input: $input) {
      pokemonId
    }
  }
`);

export interface PokemonBaseStatsFormProps {
  pokemonBaseStatsFormFragment: FragmentType<typeof PokemonBaseStatsFormFragment>;
}

export function PokemonBaseStatsForm({ pokemonBaseStatsFormFragment }: PokemonBaseStatsFormProps) {
  // フラグメント開梱
  const pokemonBaseStats = getFragmentData(
    PokemonBaseStatsFormFragment,
    pokemonBaseStatsFormFragment
  );

  // state
  const toast = useToast();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [defaultValues, setDefaultValues] =
    useState<PokemonBaseStatsFormSchemaType>(pokemonBaseStats);

  // React Hook Form
  const methods = useForm<PokemonBaseStatsFormSchemaType>({
    resolver: zodResolver(pokemonBaseStatsFormSchema),
    mode: 'onChange',
    defaultValues,
  });

  // Mutation
  const [updateResult, executeUpdate] = useMutation(UpdatePokemonBaseStatsMutation);
  const { fetching } = updateResult;

  /**
   * 更新処理
   */
  const handleSubmit = async (data: PokemonBaseStatsFormSchemaType) => {
    executeUpdate({
      input: {
        pokemonId: pokemonBaseStats.pokemonId,
        hitPoints: data.hitPoints,
        attack: data.attack,
        defense: data.defense,
        spAttack: data.spAttack,
        spDefense: data.spDefense,
        speed: data.speed,
      },
    })
      .then(() => {
        toast({ status: 'success', description: '種族値を更新しました' });
        setDefaultValues(data);
        setIsEditing(false);
      })
      .catch((_e) => {
        toast({ status: 'error', description: '種族値を更新できませんでした' });
      });
  };

  /**
   * キャンセルボタン押下
   */
  const handleClickCancel = () => {
    methods.reset(defaultValues);
    setIsEditing(false);
  };

  /**
   * 編集ボタン押下
   */
  const handleClickEditIcon = () => {
    setIsEditing(true);
  };

  return (
    <FormProvider {...methods}>
      <PokemonBaseStatsFormPresenter
        onSubmit={handleSubmit}
        isFetching={fetching}
        isEditing={isEditing}
        onClickEditIcon={handleClickEditIcon}
        onClickCancelIcon={handleClickCancel}
      />
    </FormProvider>
  );
}
