import { Button, Center, Flex, Input, Text } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { PokemonFormSchemaType } from './Pokemon.schema';
import { Select } from 'chakra-react-select';
import { Type } from '@packages/common-enum';

const options: { label: string; value: string }[] = Type.values.map((v) => {
  return { label: v.name, value: v.id };
});

export interface PokemonPresenterProps {
  onSubmit: (data: PokemonFormSchemaType) => void;
  isFetching: boolean;
}

export function PokemonPresenter({ onSubmit, isFetching }: PokemonPresenterProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useFormContext<PokemonFormSchemaType>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDir='column' gap={4}>
        {/* ポケモン名 */}
        <Flex flexDir='column' gap={1}>
          <Text fontSize='0.8rem' fontWeight='bold'>
            ポケモン名
          </Text>
          <Input {...register('name')} isInvalid={errors.name !== undefined} />
          {errors.name && (
            <Text color='red.500' fontSize='0.8rem' fontWeight='bold'>
              {errors.name.message}
            </Text>
          )}
        </Flex>

        {/* 図鑑No */}
        <Flex flexDir='column' gap={1}>
          <Text fontSize='0.8rem' fontWeight='bold'>
            図鑑No
          </Text>
          <Input
            {...register('pokedexNo', { valueAsNumber: true })}
            isInvalid={errors.pokedexNo !== undefined}
          />
          {errors.pokedexNo && (
            <Text color='red.500' fontSize='0.8rem' fontWeight='bold'>
              {errors.pokedexNo.message}
            </Text>
          )}
        </Flex>

        {/* タイプ */}
        <Select options={options} />

        <Center>
          <Button
            type='submit'
            isLoading={isFetching}
            isDisabled={!isValid}
            width='fit-content'
            colorScheme='teal'
            variant='solid'
          >
            保存
          </Button>
        </Center>
      </Flex>
    </form>
  );
}
