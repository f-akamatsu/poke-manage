import {
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { TypeSelect } from '../TypeSelect/TypeSelect';
import { PokemonCreateFormSchemaType } from './PokemonCreateForm.schema';
import { useFormContext } from 'react-hook-form';

export interface PokemonCreateFormPresenterProps {
  onSubmit: (data: PokemonCreateFormSchemaType) => void;
  isFetching: boolean;
}

export function PokemonCreateFormPresenter({
  onSubmit,
  isFetching,
}: PokemonCreateFormPresenterProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useFormContext<PokemonCreateFormSchemaType>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDir='column' gap={4} width='fit-content' p={6} bgColor='white'>
        {/* ポケモンの名前 */}
        <FormControl isInvalid={errors.name !== undefined}>
          <FormLabel fontSize='xs'>ポケモンの名前</FormLabel>
          <Input {...register('name')} />
          {errors.name && <FormErrorMessage fontSize='xs'>{errors.name.message}</FormErrorMessage>}
        </FormControl>

        {/* 図鑑No */}
        <FormControl isInvalid={errors.pokedexNo !== undefined}>
          <FormLabel fontSize='xs'>図鑑No</FormLabel>
          <Input {...register('pokedexNo', { valueAsNumber: true })} />
          {errors.pokedexNo && (
            <FormErrorMessage fontSize='xs'>{errors.pokedexNo.message}</FormErrorMessage>
          )}
        </FormControl>

        {/* タイプ */}
        <Flex gap={2}>
          <FormControl>
            <FormLabel fontSize='xs'>タイプ1</FormLabel>
            <TypeSelect value={'01'} onChange={() => {}} />
          </FormControl>

          <FormControl>
            <FormLabel fontSize='xs'>タイプ2</FormLabel>
            <TypeSelect value={'01'} onChange={() => {}} />
          </FormControl>
        </Flex>

        <Center>
          <Button w='fit-content' mt={4} colorScheme='teal' isDisabled={!isValid}>
            新規登録
          </Button>
        </Center>
      </Flex>
    </form>
  );
}
