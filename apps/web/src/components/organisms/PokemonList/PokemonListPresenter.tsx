import { FragmentType } from '@/gql/__generated__';
import { AddIcon } from '@chakra-ui/icons';
import { Button, Flex } from '@chakra-ui/react';
import { PokemonCardFieldsFragment } from '../PokemonCard/PokemonCardPresenter';
import { PokemonCardList } from '../PokemonCardList/PokemonCardList';

export interface PokemonListPresenterProps {
  pokemonFragments: FragmentType<typeof PokemonCardFieldsFragment>[];
  onClickPokemonCard: (pokemonId: string) => void;
}

export function PokemonListPresenter({
  pokemonFragments,
  onClickPokemonCard,
}: PokemonListPresenterProps) {
  return (
    <Flex flexDir='column' gap={4}>
      <Flex>
        <Button w='fit-content' leftIcon={<AddIcon />} colorScheme='teal' variant='solid'>
          登録
        </Button>
      </Flex>

      <PokemonCardList
        pokemonFragments={pokemonFragments}
        onClickPokemonCard={onClickPokemonCard}
      />
    </Flex>
  );
}
