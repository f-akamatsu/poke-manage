import { Button, Flex, Input } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

export interface PokemonPresenterProps {
  onSubmit: () => void;
}

export function PokemonPresenter({ onSubmit }: PokemonPresenterProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDir='column' gap={1} width='80%'>
        <Input {...register('name')} />
        <Input {...register('pokedexNo', { valueAsNumber: true })} />
        <Button type='submit'>保存</Button>
      </Flex>
    </form>
  );
}
