import { Args, ID, Int, Query, Resolver } from '@nestjs/graphql';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './models/pokemon.models';

@Resolver()
export class PokemonResolver {
  constructor (private pokemonService: PokemonService) {}

  @Query(() => [Pokemon], { name: 'pokemonAll' })
  findAll() {
    return this.pokemonService.findAll();
  }

  @Query(() => Pokemon, { name: 'pokemon' })
  findOneById(@Args('id', { type: () => ID }) id: string) {
    return this.pokemonService.findOneById(id);
  }
}
