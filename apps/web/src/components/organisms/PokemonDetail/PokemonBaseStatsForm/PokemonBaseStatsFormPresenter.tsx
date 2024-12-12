import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Icon,
  IconButton,
  SimpleGrid,
  Spacer,
  Tooltip,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { FaTimes } from 'react-icons/fa';
import { FaFloppyDisk, FaPenToSquare } from 'react-icons/fa6';
import { NumberInput } from '../../../molecules/NumberInput/NumberInput';
import { PokemonBaseStatsFormSchemaType } from './PokemonBaseStatsFormSchema';

export interface PokemonBaseStatsFormPresenterProps {
  onSubmit: (data: PokemonBaseStatsFormSchemaType) => void;
  isFetching: boolean;
  isEditing: boolean;
  onClickEditIcon: () => void;
  onClickCancelIcon: () => void;
}

export function PokemonBaseStatsFormPresenter({
  onSubmit,
  isFetching,
  isEditing,
  onClickEditIcon,
  onClickCancelIcon,
}: PokemonBaseStatsFormPresenterProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useFormContext<PokemonBaseStatsFormSchemaType>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card w='fit-content'>
        <CardHeader>
          <Flex alignItems='center' gap={4}>
            <Heading size='md'>種族値</Heading>
            <Spacer />
            {/* それぞれのボタンにkeyをつけないと挙動がおかしくなる */}
            {isEditing ? (
              <>
                <Tooltip label='変更をキャンセルします'>
                  <IconButton
                    key='cancel-button'
                    aria-label='変更をキャンセルする'
                    icon={<Icon as={FaTimes} />}
                    colorScheme='red'
                    size='sm'
                    variant='ghost'
                    onClick={onClickCancelIcon}
                    isRound
                    disabled={isFetching}
                  />
                </Tooltip>
                <Tooltip label='変更を保存します'>
                  <IconButton
                    key='save-button'
                    type='submit'
                    aria-label='変更を保存する'
                    icon={<Icon as={FaFloppyDisk} />}
                    isLoading={isFetching}
                    isDisabled={!isValid}
                    colorScheme='red'
                    size='sm'
                    isRound
                  />
                </Tooltip>
              </>
            ) : (
              <Tooltip label='種族値を変更します'>
                <IconButton
                  key='edit-button'
                  type='button'
                  aria-label='種族値を変更する'
                  icon={<Icon as={FaPenToSquare} />}
                  colorScheme='red'
                  variant='ghost'
                  onClick={onClickEditIcon}
                  size='sm'
                  isRound
                />
              </Tooltip>
            )}
          </Flex>
        </CardHeader>
        <CardBody>
          <SimpleGrid columns={2} spacingX={12} spacingY={4}>
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
          </SimpleGrid>
        </CardBody>
      </Card>
    </form>
  );
}
