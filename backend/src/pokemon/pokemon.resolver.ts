import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './models/pokemon.models';

@Resolver()
export class PokemonResolver {
  constructor (private pokemonService: PokemonService) {}

  @Query(() => [Pokemon], { nullable: 'items' })
  findAll() {
    return this.pokemonService.findAll();
  }

  @Query(() => Pokemon)
  findOneById(@Args('id', { type: () => ID }) id: string) {
    return this.pokemonService.findOneById(id);
  }
}
