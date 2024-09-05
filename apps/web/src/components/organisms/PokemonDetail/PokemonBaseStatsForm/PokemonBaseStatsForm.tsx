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
  const toast = useToast();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const pokemonBaseStats = getFragmentData(
    PokemonBaseStatsFormFragment,
    pokemonBaseStatsFormFragment
  );

  // React Hook Form
  const methods = useForm<PokemonBaseStatsFormSchemaType>({
    resolver: zodResolver(pokemonBaseStatsFormSchema),
    mode: 'onChange',
    defaultValues: {
      hitPoints: pokemonBaseStats.hitPoints,
      attack: pokemonBaseStats.attack,
      defense: pokemonBaseStats.defense,
      spAttack: pokemonBaseStats.spAttack,
      spDefense: pokemonBaseStats.spDefense,
      speed: pokemonBaseStats.speed,
    },
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
        setIsEditing(false);
      })
      .catch((_e) => {
        toast({ status: 'error', description: '種族値を更新できませんでした' });
      });
  };

  const handleClickEditIcon = () => {
    console.log('handleClickEditIcon');
    setIsEditing(true);
  };

  return (
    <FormProvider {...methods}>
      <PokemonBaseStatsFormPresenter
        onSubmit={handleSubmit}
        isFetching={fetching}
        isEditing={isEditing}
        onClickEditIcon={handleClickEditIcon}
      />
    </FormProvider>
  );
}
