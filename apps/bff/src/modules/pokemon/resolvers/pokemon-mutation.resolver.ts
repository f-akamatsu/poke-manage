import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Pokemon } from '../models/pokemon.model';
import { PokemonCommandService } from '../services/pokemon-command.service';
import { PokemonQueryService } from '../services/pokemon-query.service';
import { CreatePokemonInput } from '../inputs/create-pokemon.input';
import { PokemonBase } from '../types/pokemon.type';
import { UpdatePokemonInput } from '../inputs/update-pokemon.input';

@Resolver(() => Pokemon)
export class PokemonMutationResolver {
  constructor(
    private readonly pokemonCommandService: PokemonCommandService,
    private readonly pokemonQueryService: PokemonQueryService,
  ) {}

  @Mutation(() => Pokemon)
  async createPokemon(
    @Args('input') input: CreatePokemonInput,
  ): Promise<PokemonBase> {
    const { pokemonId } = await this.pokemonCommandService.createPokemon(input);
    return await this.pokemonQueryService.findPokemon(pokemonId);
  }

  @Mutation(() => Pokemon)
  async updatePokemon(
    @Args('input') input: UpdatePokemonInput,
  ): Promise<PokemonBase> {
    const { pokemonId } = await this.pokemonCommandService.updatePokemon(input);
    return await this.pokemonQueryService.findPokemon(pokemonId);
  }
}
