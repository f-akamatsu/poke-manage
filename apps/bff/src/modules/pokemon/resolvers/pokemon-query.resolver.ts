import { Args, Query, Resolver } from '@nestjs/graphql';
import { Pokemon } from '../models/pokemon.model';
import { PokemonQueryService } from '../services/pokemon-query.service';

@Resolver()
export class PokemonQueryResolver {
  constructor(private readonly pokemonQueryService: PokemonQueryService) {}

  @Query(() => [Pokemon])
  async fetchAllPokemon(): Promise<Pokemon[]> {
    return await this.pokemonQueryService.fetchAllPokemon();
  }

  @Query(() => Pokemon)
  async findPokemon(@Args('pokemonId') pokemonId: string): Promise<Pokemon> {
    return await this.pokemonQueryService.findPokemon(pokemonId);
  }
}
