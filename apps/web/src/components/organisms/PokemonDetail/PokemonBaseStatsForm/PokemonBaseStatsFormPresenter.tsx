import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  IconButton,
  Spacer,
  Tooltip,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { FaFloppyDisk, FaPenToSquare } from 'react-icons/fa6';
import { NumberInput } from '../../../atoms/NumberInput/NumberInput';
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
      <Card w='fit-content'>
        <CardHeader>
          <Flex alignItems='center'>
            <Heading size='md'>種族値</Heading>
            <Spacer />
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
                  colorScheme='red'
                />
              </Tooltip>
            ) : (
              <Tooltip label='種族値を変更します'>
                <IconButton
                  key='edit-button'
                  type='button'
                  aria-label='種族値を変更する'
                  icon={<Icon as={FaPenToSquare} />}
                  colorScheme='red'
                  variant='outline'
                  onClick={onClickEditIcon}
                />
              </Tooltip>
            )}
          </Flex>
        </CardHeader>
        <CardBody>
          <Grid
            templateRows='repeat(3, 1fr)'
            templateColumns='repeat(2, 1fr)'
            rowGap={4}
            columnGap={12}
          >
            {/* HP */}
            <GridItem>
              <NumberInput
                {...register('hitPoints', { valueAsNumber: true })}
                isReadOnly={!isEditing}
                label='HP'
                errorMessage={errors.hitPoints?.message}
              />
            </GridItem>

            {/* こうげき */}
            <GridItem>
              <NumberInput
                {...register('attack', { valueAsNumber: true })}
                isReadOnly={!isEditing}
                label='こうげき'
                errorMessage={errors.attack?.message}
              />
            </GridItem>

            {/* ぼうぎょ */}
            <GridItem>
              <NumberInput
                {...register('defense', { valueAsNumber: true })}
                isReadOnly={!isEditing}
                label='ぼうぎょ'
                errorMessage={errors.defense?.message}
              />
            </GridItem>

            {/* とくこう */}
            <GridItem>
              <NumberInput
                {...register('spAttack', { valueAsNumber: true })}
                isReadOnly={!isEditing}
                label='とくこう'
                errorMessage={errors.spAttack?.message}
              />
            </GridItem>

            {/* とくぼう */}
            <GridItem>
              <NumberInput
                {...register('spDefense', { valueAsNumber: true })}
                isReadOnly={!isEditing}
                label='とくぼう'
                errorMessage={errors.spDefense?.message}
              />
            </GridItem>

            {/* すばやさ */}
            <GridItem>
              <NumberInput
                {...register('speed', { valueAsNumber: true })}
                isReadOnly={!isEditing}
                label='すばやさ'
                errorMessage={errors.speed?.message}
              />
            </GridItem>
          </Grid>
        </CardBody>
      </Card>
    </form>
  );
}
