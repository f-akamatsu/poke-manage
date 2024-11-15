import { Button } from '@/components/ui/button';
import { Field } from '@/components/ui/field';
import { Center, Flex, Input } from '@chakra-ui/react';
import { Controller, useFormContext } from 'react-hook-form';
import { TypeSelect } from '../TypeSelect/TypeSelect';
import { PokemonCreateFormSchemaType } from './PokemonCreateForm.schema';

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
        {/* 図鑑No */}
        <Field label='図鑑No' invalid={!!errors.pokedexNo} errorText={errors.pokedexNo?.message}>
          <Input type='number' {...register('pokedexNo', { valueAsNumber: true })} w='100px' />
        </Field>

        {/* 名前 */}
        <Field label='名前' invalid={!!errors.name} errorText={errors.name?.message}>
          <Input {...register('name')} w='200px' />
        </Field>

        {/* タイプ */}
        <Flex gap={2}>
          <Field label='タイプ1' invalid={!!errors.type1} errorText={errors.type1?.message}>
            <Controller
              control={control}
              name='type1'
              render={({ field: { name, onChange, onBlur, value }, fieldState: { error } }) => (
                <TypeSelect
                  name={name}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  isInvalid={!!error}
                />
              )}
            />
          </Field>
          <Field label='タイプ2' invalid={!!errors.type2} errorText={errors.type2?.message}>
            <Controller
              control={control}
              name='type2'
              render={({ field: { name, onChange, onBlur, value }, fieldState: { error } }) => (
                <TypeSelect
                  name={name}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  isInvalid={!!error}
                />
              )}
            />
          </Field>
        </Flex>

        <Center>
          <Button
            type='submit'
            w='fit-content'
            mt={4}
            colorScheme='teal'
            disabled={!isValid}
            loading={isFetching}
          >
            新規登録
          </Button>
        </Center>
      </Flex>
    </form>
  );
}
