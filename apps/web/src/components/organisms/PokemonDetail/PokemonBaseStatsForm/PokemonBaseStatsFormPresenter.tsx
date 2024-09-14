import { Flex, FormControl, FormErrorMessage, FormLabel, Icon, IconButton } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { FaFloppyDisk, FaPenToSquare } from 'react-icons/fa6';
import NumberInput from '../../../atoms/NumberInput/NumberInput';
import { PokemonBaseStatsFormSchemaType } from './PokemonBaseStatsFormSchema';

export interface PokemonBaseStatsFormPresenterProps {
  onSubmit: (data: PokemonBaseStatsFormSchemaType) => void;
  isFetching: boolean;
  isEditing: boolean;
  onClickEditIcon: () => void;
}

export function PokemonBaseStatsFormPresenter({
  onSubmit,
  isFetching,
  isEditing,
  onClickEditIcon,
}: PokemonBaseStatsFormPresenterProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useFormContext<PokemonBaseStatsFormSchemaType>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex alignItems='center' gap={12}>
        <Flex gap={4}>
          {/* HP */}
          <FormControl isInvalid={errors.hitPoints !== undefined} w='80px'>
            <FormLabel fontSize='xs'>HP</FormLabel>
            <NumberInput
              {...register('hitPoints', { valueAsNumber: true })}
              isReadOnly={!isEditing}
            />
            {errors.hitPoints && (
              <FormErrorMessage fontSize='xs'>{errors.hitPoints.message}</FormErrorMessage>
            )}
          </FormControl>

          {/* こうげき */}
          <FormControl isInvalid={errors.attack !== undefined} w='80px'>
            <FormLabel fontSize='xs'>こうげき</FormLabel>
            <NumberInput {...register('attack', { valueAsNumber: true })} isReadOnly={!isEditing} />
            {errors.attack && (
              <FormErrorMessage fontSize='xs'>{errors.attack.message}</FormErrorMessage>
            )}
          </FormControl>

          {/* ぼうぎょ */}
          <FormControl isInvalid={errors.defense !== undefined} w='80px'>
            <FormLabel fontSize='xs'>ぼうぎょ</FormLabel>
            <NumberInput
              {...register('defense', { valueAsNumber: true })}
              isReadOnly={!isEditing}
            />
            {errors.defense && (
              <FormErrorMessage fontSize='xs'>{errors.defense.message}</FormErrorMessage>
            )}
          </FormControl>

          {/* とくこう */}
          <FormControl isInvalid={errors.spAttack !== undefined} w='80px'>
            <FormLabel fontSize='xs'>とくこう</FormLabel>
            <NumberInput
              {...register('spAttack', { valueAsNumber: true })}
              isReadOnly={!isEditing}
            />
            {errors.spAttack && (
              <FormErrorMessage fontSize='xs'>{errors.spAttack.message}</FormErrorMessage>
            )}
          </FormControl>

          {/* とくぼう */}
          <FormControl isInvalid={errors.spDefense !== undefined} w='80px'>
            <FormLabel fontSize='xs'>とくぼう</FormLabel>
            <NumberInput
              {...register('spDefense', { valueAsNumber: true })}
              isReadOnly={!isEditing}
            />
            {errors.spDefense && (
              <FormErrorMessage fontSize='xs'>{errors.spDefense.message}</FormErrorMessage>
            )}
          </FormControl>

          {/* すばやさ */}
          <FormControl isInvalid={errors.speed !== undefined} w='80px'>
            <FormLabel fontSize='xs'>すばやさ</FormLabel>
            <NumberInput {...register('speed', { valueAsNumber: true })} isReadOnly={!isEditing} />
            {errors.speed && (
              <FormErrorMessage fontSize='xs'>{errors.speed.message}</FormErrorMessage>
            )}
          </FormControl>
        </Flex>

        {/* それぞれのボタンにkeyをつけないと挙動がおかしくなる */}
        {isEditing ? (
          <IconButton
            key='save-button'
            type='submit'
            aria-label='更新する'
            icon={<Icon as={FaFloppyDisk} />}
            isLoading={isFetching}
            isDisabled={!isValid}
            colorScheme='teal'
          />
        ) : (
          <IconButton
            key='edit-button'
            type='button'
            aria-label='編集する'
            icon={<Icon as={FaPenToSquare} />}
            colorScheme='teal'
            variant='outline'
            onClick={onClickEditIcon}
          />
        )}
      </Flex>
    </form>
  );
}
