import { Button, Flex, Input } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

export interface PokemonPresenterProps {
  onSubmit: () => void;
  isFetching: boolean;
}

export function PokemonPresenter({ onSubmit, isFetching }: PokemonPresenterProps) {
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
        <Button type='submit' isLoading={isFetching}>
          保存
        </Button>
      </Flex>
    </form>
  );
}
