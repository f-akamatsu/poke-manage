import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GraphQLVoid } from 'graphql-scalars';
import { CreatePokemonInput } from '../inputs/create-pokemon.input';
import { DeletePokemonInput } from '../inputs/delete-pokemon.input';
import { UpdatePokemonBaseStatsInput } from '../inputs/update-pokemon-base-stats.input';
import { UpdatePokemonNameInput } from '../inputs/update-pokemon-name.input';
import { Pokemon } from '../models/pokemon.model';
import { PokemonCommandService } from '../services/pokemon-command.service';
import { PokemonQueryService } from '../services/pokemon-query.service';

@Resolver(() => Pokemon)
export class PokemonMutationResolver {
  constructor(
    private readonly pokemonCommandService: PokemonCommandService,
    private readonly pokemonQueryService: PokemonQueryService,
  ) {}

  @Mutation(() => Pokemon)
  async createPokemon(
    @Args('input') input: CreatePokemonInput,
  ): Promise<Pokemon> {
    const { pokemonId } = await this.pokemonCommandService.createPokemon(input);
    return await this.pokemonQueryService.findPokemon(pokemonId);
  }

  @Mutation(() => Pokemon)
  async updatePokemonName(
    @Args('input') input: UpdatePokemonNameInput,
  ): Promise<Pokemon> {
    await this.pokemonCommandService.updatePokemonName(input);
    return await this.pokemonQueryService.findPokemon(input.pokemonId);
  }

  @Mutation(() => GraphQLVoid, { nullable: true })
  async deletePokemon(@Args('input') input: DeletePokemonInput): Promise<void> {
    await this.pokemonCommandService.deletePokemon(input);
  }

  @Mutation(() => Pokemon)
  async updatePokemonBaseStats(
    @Args('input') input: UpdatePokemonBaseStatsInput,
  ): Promise<Pokemon> {
    await this.pokemonCommandService.updatePokemonBaseStats(input);
    return await this.pokemonQueryService.findPokemon(input.pokemonId);
  }
}
