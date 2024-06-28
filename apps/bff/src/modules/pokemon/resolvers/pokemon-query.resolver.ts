import { Args, Query, Resolver } from '@nestjs/graphql';
import { Pokemon } from '../models/pokemon.model';
import { PokemonQueryService } from '../services/pokemon-query.service';
import { PokemonBase } from '../types/pokemon.type';

@Resolver()
export class PokemonQueryResolver {
  constructor(private readonly pokemonQueryService: PokemonQueryService) {}

  @Query(() => [Pokemon])
  fetchAllPokemon(): Promise<PokemonBase[]> {
    return this.pokemonQueryService.fetchAllPokemon();
  }

  @Query(() => Pokemon)
  findPokemon(@Args('id') pokemonId: string): Promise<PokemonBase> {
    return this.pokemonQueryService.findPokemon(pokemonId);
  }
}
