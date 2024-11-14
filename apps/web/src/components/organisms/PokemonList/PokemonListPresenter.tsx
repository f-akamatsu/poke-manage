import { SimpleModal } from '@/components/molecules/SimpleModal/SimpleModal';
import { Button } from '@/components/ui/button';
import { FragmentType } from '@/gql/__generated__';
import { Flex, UseDisclosureReturn } from '@chakra-ui/react';
import { PokemonCardFieldsFragment } from '../PokemonCard/PokemonCardPresenter';
import { PokemonCardList } from '../PokemonCardList/PokemonCardList';
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
          <SimpleModal
            title='ポケモン登録'
            dialogTrigger={
              <Button
                w='fit-content'
                colorScheme='teal'
                variant='solid'
                onClick={createModalDisclosure.onOpen}
              >
                登録
              </Button>
            }
          >
            <PokemonCreateForm />
          </SimpleModal>
        </Flex>

        <PokemonCardList
          pokemonFragments={pokemonFragments}
          onClickPokemonCard={onClickPokemonCard}
        />
      </Flex>
    </>
  );
}
