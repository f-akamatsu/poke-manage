import { Field } from '@/components/ui/field';
import { Flex, Input } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { FaEdit } from 'react-icons/fa';
import { FaFloppyDisk } from 'react-icons/fa6';
import { Button } from '../../../ui/button';
import { Tooltip } from '../../../ui/tooltip';
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
          <Field label='HP' invalid={!!errors.hitPoints} errorText={errors.hitPoints?.message}>
            <Input
              type='number'
              textAlign='right'
              readOnly={!isEditing}
              {...register('hitPoints', { valueAsNumber: true })}
            />
          </Field>

          {/* こうげき */}
          <Field label='こうげき' invalid={!!errors.attack} errorText={errors.attack?.message}>
            <Input
              type='number'
              textAlign='right'
              readOnly={!isEditing}
              {...register('attack', { valueAsNumber: true })}
            />
          </Field>

          {/* ぼうぎょ */}
          <Field label='ぼうぎょ' invalid={!!errors.defense} errorText={errors.defense?.message}>
            <Input
              type='number'
              textAlign='right'
              readOnly={!isEditing}
              {...register('defense', { valueAsNumber: true })}
            />
          </Field>

          {/* とくこう */}
          <Field label='とくこう' invalid={!!errors.spAttack} errorText={errors.spAttack?.message}>
            <Input
              type='number'
              textAlign='right'
              readOnly={!isEditing}
              {...register('spAttack', { valueAsNumber: true })}
            />
          </Field>

          {/* とくぼう */}
          <Field
            label='とくぼう'
            invalid={!!errors.spDefense}
            errorText={errors.spDefense?.message}
          >
            <Input
              type='number'
              textAlign='right'
              readOnly={!isEditing}
              {...register('spDefense', { valueAsNumber: true })}
            />
          </Field>

          {/* すばやさ */}
          <Field label='すばやさ' invalid={!!errors.speed} errorText={errors.speed?.message}>
            <Input
              type='number'
              textAlign='right'
              readOnly={!isEditing}
              {...register('speed', { valueAsNumber: true })}
            />
          </Field>
        </Flex>

        {/* それぞれのボタンにkeyをつけないと挙動がおかしくなる */}
        {isEditing ? (
          <Tooltip content='変更を保存します'>
            <Button
              key='save-button'
              type='submit'
              aria-label='変更を保存する'
              loading={isFetching}
              disabled={!isValid}
              colorScheme='teal'
            >
              <FaFloppyDisk />
            </Button>
          </Tooltip>
        ) : (
          <Tooltip content='種族値を変更します'>
            <Button
              key='edit-button'
              type='button'
              aria-label='種族値を変更する'
              colorScheme='teal'
              variant='outline'
              onClick={onClickEditIcon}
            >
              <FaEdit />
            </Button>
          </Tooltip>
        )}
      </Flex>
    </form>
  );
}
