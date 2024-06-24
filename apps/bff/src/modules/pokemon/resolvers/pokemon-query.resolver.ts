import { Query, Resolver } from '@nestjs/graphql';
import { Pokemon } from '../models/pokemon.model';

@Resolver()
export class PokemonQueryResolver {
  @Query(() => [Pokemon])
  fetchAllPokemon() {
    // TODO
    return mockData;
  }
}

// TODO
const mockData = [
  {
    pokemonId: '00001',
    name: 'フシギダネ',
    pokedexNo: 1,
  },
  {
    pokemonId: '00002',
    name: 'フシギソウ',
    pokedexNo: 2,
  },
];
