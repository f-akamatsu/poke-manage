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
import { Controller, useFormContext } from 'react-hook-form';

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
    control,
  } = useFormContext<PokemonCreateFormSchemaType>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDir='column' gap={4} width='fit-content' bgColor='white'>
        {/* 名前 */}
        <FormControl isInvalid={errors.name !== undefined}>
          <FormLabel fontSize='xs'>名前</FormLabel>
          <Input {...register('name')} w='200px' />
          {errors.name && <FormErrorMessage fontSize='xs'>{errors.name.message}</FormErrorMessage>}
        </FormControl>

        {/* 図鑑No */}
        <FormControl isInvalid={errors.pokedexNo !== undefined}>
          <FormLabel fontSize='xs'>図鑑No</FormLabel>
          <Input type='number' {...register('pokedexNo', { valueAsNumber: true })} w='100px' />
          {errors.pokedexNo && (
            <FormErrorMessage fontSize='xs'>{errors.pokedexNo.message}</FormErrorMessage>
          )}
        </FormControl>

        {/* タイプ */}
        <Flex gap={2}>
          <Controller
            control={control}
            name='type1'
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <FormControl isInvalid={error !== undefined}>
                <FormLabel fontSize='xs'>タイプ1</FormLabel>
                <TypeSelect value={value} onChange={onChange} isInvalid={error !== undefined} />
                {error && <FormErrorMessage fontSize='xs'>{error.message}</FormErrorMessage>}
              </FormControl>
            )}
          />

          <Controller
            control={control}
            name='type2'
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <FormControl>
                <FormLabel fontSize='xs'>タイプ2</FormLabel>
                <TypeSelect value={value} onChange={onChange} isInvalid={error !== undefined} />
                {error && <FormErrorMessage fontSize='xs'>{error.message}</FormErrorMessage>}
              </FormControl>
            )}
          />
        </Flex>

        <Center>
          <Button
            type='submit'
            w='fit-content'
            mt={4}
            colorScheme='teal'
            isDisabled={!isValid}
            isLoading={isFetching}
          >
            新規登録
          </Button>
        </Center>
      </Flex>
    </form>
  );
}
