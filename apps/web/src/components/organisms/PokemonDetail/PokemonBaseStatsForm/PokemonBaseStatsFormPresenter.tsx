import { Flex, Icon, IconButton, Tooltip } from '@chakra-ui/react';
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
          <NumberInput
            {...register('hitPoints', { valueAsNumber: true })}
            isReadOnly={!isEditing}
            label='HP'
            errorMessage={errors.hitPoints?.message}
          />

          {/* こうげき */}
          <NumberInput
            {...register('attack', { valueAsNumber: true })}
            isReadOnly={!isEditing}
            label='こうげき'
            errorMessage={errors.attack?.message}
          />

          {/* ぼうぎょ */}
          <NumberInput
            {...register('defense', { valueAsNumber: true })}
            isReadOnly={!isEditing}
            label='ぼうぎょ'
            errorMessage={errors.defense?.message}
          />

          {/* とくこう */}
          <NumberInput
            {...register('spAttack', { valueAsNumber: true })}
            isReadOnly={!isEditing}
            label='とくこう'
            errorMessage={errors.spAttack?.message}
          />

          {/* とくぼう */}
          <NumberInput
            {...register('spDefense', { valueAsNumber: true })}
            isReadOnly={!isEditing}
            label='とくぼう'
            errorMessage={errors.spDefense?.message}
          />

          {/* すばやさ */}
          <NumberInput
            {...register('speed', { valueAsNumber: true })}
            isReadOnly={!isEditing}
            label='すばやさ'
            errorMessage={errors.speed?.message}
          />
        </Flex>

        {/* それぞれのボタンにkeyをつけないと挙動がおかしくなる */}
        {isEditing ? (
          <Tooltip label='変更を保存します'>
            <IconButton
              key='save-button'
              type='submit'
              aria-label='変更を保存する'
              icon={<Icon as={FaFloppyDisk} />}
              isLoading={isFetching}
              isDisabled={!isValid}
              colorScheme='teal'
            />
          </Tooltip>
        ) : (
          <Tooltip label='種族値を変更します'>
            <IconButton
              key='edit-button'
              type='button'
              aria-label='種族値を変更する'
              icon={<Icon as={FaPenToSquare} />}
              colorScheme='teal'
              variant='outline'
              onClick={onClickEditIcon}
            />
          </Tooltip>
        )}
      </Flex>
    </form>
  );
}
