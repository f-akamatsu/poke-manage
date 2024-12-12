import { SimpleModal } from '@/components/molecules/SimpleModal/SimpleModal';
import { FragmentType } from '@/gql/__generated__';
import { AddIcon } from '@chakra-ui/icons';
import { Button, Flex, UseDisclosureReturn } from '@chakra-ui/react';
import { PokemonCardFieldsFragment } from '../PokemonCard/PokemonCardPresenter';
import { PokemonCardList } from '../PokemonCardList';
import { PokemonCreateForm } from '../PokemonCreateForm/PokemonCreateForm';

export interface PokemonListPresenterProps {
  pokemonFragments: FragmentType<typeof PokemonCardFieldsFragment>[];
  onClickPokemonCard: (pokemonId: string) => void;
  createModalDisclosure: UseDisclosureReturn;
}

export function PokemonListPresenter({
  pokemonFragments,
  onClickPokemonCard,
  createModalDisclosure,
}: PokemonListPresenterProps) {
  return (
    <>
      <Flex flexDir='column' gap={4}>
        <Flex>
          <Button
            w='fit-content'
            leftIcon={<AddIcon />}
            colorScheme='red'
            variant='solid'
            onClick={createModalDisclosure.onOpen}
          >
            登録
          </Button>
        </Flex>

        <PokemonCardList
          pokemonFragments={pokemonFragments}
          onClickPokemonCard={onClickPokemonCard}
        />
      </Flex>

      {/* 登録モーダル */}
      <SimpleModal
        isOpen={createModalDisclosure.isOpen}
        onClose={createModalDisclosure.onClose}
        title='ポケモン登録'
      >
        <PokemonCreateForm />
      </SimpleModal>
    </>
  );
}
