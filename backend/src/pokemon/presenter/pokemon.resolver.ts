import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { PokemonUseCase } from '../useCase/pokemon.useCase';
import { PokemonGQLModel } from './model/pokemon.model';

@Resolver()
export class PokemonResolver {
  
  constructor (private pokemonService: PokemonUseCase) {}

  @Query(() => [PokemonGQLModel], { name: 'pokemonAll' })
  findAll() {
    return this.pokemonService.findAll();
  }

  @Query(() => PokemonGQLModel, { name: 'pokemon' })
  findOneById(@Args('id', { type: () => ID }) id: string) {
    return this.pokemonService.findOneById(id);
  }
}
