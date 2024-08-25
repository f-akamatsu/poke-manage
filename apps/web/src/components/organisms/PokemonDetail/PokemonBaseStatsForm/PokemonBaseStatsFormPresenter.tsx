import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { PokemonBaseStatsFormSchemaType } from './PokemonBaseStatsFormSchema';

export interface PokemonBaseStatsFormPresenterProps {
  onSubmit: (data: PokemonBaseStatsFormSchemaType) => void;
  isFetching: boolean;
}

export function PokemonBaseStatsFormPresenter({
  onSubmit,
  isFetching,
}: PokemonBaseStatsFormPresenterProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useFormContext<PokemonBaseStatsFormSchemaType>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex gap={4} width='fit-content' bgColor='white'>
        {/* HP */}
        <FormControl isInvalid={errors.hitPoints !== undefined}>
          <FormLabel fontSize='xs'>HP</FormLabel>
          <Input type='number' {...register('hitPoints', { valueAsNumber: true })} w='100px' />
          {errors.hitPoints && (
            <FormErrorMessage fontSize='xs'>{errors.hitPoints.message}</FormErrorMessage>
          )}
        </FormControl>

        {/* こうげき */}
        <FormControl isInvalid={errors.attack !== undefined}>
          <FormLabel fontSize='xs'>こうげき</FormLabel>
          <Input type='number' {...register('attack', { valueAsNumber: true })} w='100px' />
          {errors.attack && (
            <FormErrorMessage fontSize='xs'>{errors.attack.message}</FormErrorMessage>
          )}
        </FormControl>

        {/* ぼうぎょ */}
        <FormControl isInvalid={errors.defense !== undefined}>
          <FormLabel fontSize='xs'>ぼうぎょ</FormLabel>
          <Input type='number' {...register('defense', { valueAsNumber: true })} w='100px' />
          {errors.defense && (
            <FormErrorMessage fontSize='xs'>{errors.defense.message}</FormErrorMessage>
          )}
        </FormControl>

        {/* とくこう */}
        <FormControl isInvalid={errors.spAttack !== undefined}>
          <FormLabel fontSize='xs'>とくこう</FormLabel>
          <Input type='number' {...register('spAttack', { valueAsNumber: true })} w='100px' />
          {errors.spAttack && (
            <FormErrorMessage fontSize='xs'>{errors.spAttack.message}</FormErrorMessage>
          )}
        </FormControl>

        {/* とくぼう */}
        <FormControl isInvalid={errors.spDefense !== undefined}>
          <FormLabel fontSize='xs'>とくぼう</FormLabel>
          <Input type='number' {...register('spDefense', { valueAsNumber: true })} w='100px' />
          {errors.spDefense && (
            <FormErrorMessage fontSize='xs'>{errors.spDefense.message}</FormErrorMessage>
          )}
        </FormControl>

        {/* すばやさ */}
        <FormControl isInvalid={errors.speed !== undefined}>
          <FormLabel fontSize='xs'>すばやさ</FormLabel>
          <Input type='number' {...register('speed', { valueAsNumber: true })} w='100px' />
          {errors.speed && (
            <FormErrorMessage fontSize='xs'>{errors.speed.message}</FormErrorMessage>
          )}
        </FormControl>

        <Button type='submit' w='fit-content' isLoading={isFetching} isDisabled={!isValid}>
          種族値更新
        </Button>
      </Flex>
    </form>
  );
}
