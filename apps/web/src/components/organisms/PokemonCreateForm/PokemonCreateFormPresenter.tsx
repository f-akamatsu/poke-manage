import { Button, Center, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { TypeSelect } from '../TypeSelect/TypeSelect';

export interface PokemonCreateFormPresenterProps {}

export function PokemonCreateFormPresenter({}: PokemonCreateFormPresenterProps) {
  return (
    <Flex flexDir='column' gap={4} width='fit-content'>
      {/* ポケモンの名前 */}
      <FormControl>
        <FormLabel fontSize='xs'>ポケモンの名前</FormLabel>
        <Input />
      </FormControl>

      {/* 図鑑No */}
      <FormControl>
        <FormLabel fontSize='xs'>図鑑No</FormLabel>
        <Input />
      </FormControl>

      {/* タイプ */}
      <Flex gap={2}>
        <FormControl>
          <FormLabel fontSize='xs'>タイプ1</FormLabel>
          <TypeSelect value={'01'} onChange={() => {}} />
        </FormControl>

        <FormControl>
          <FormLabel fontSize='xs'>タイプ2</FormLabel>
          <TypeSelect value={'01'} onChange={() => {}} />
        </FormControl>
      </Flex>

      <Center>
        <Button w='fit-content' mt={4} colorScheme='teal'>
          新規登録
        </Button>
      </Center>
    </Flex>
  );
}
