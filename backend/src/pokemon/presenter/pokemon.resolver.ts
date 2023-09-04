import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PokemonUseCase } from '../useCase/pokemon.useCase';
import { PokemonGQLModel } from './model/pokemon.model';
import { CreatePokemonInput } from './dto/createPokemon.input';
import { UpdatePokemonInput } from './dto/updatePokemon.input';

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

  @Mutation(() => PokemonGQLModel)
  createPokemon(@Args('createPokemonInput') createPokemonInput: CreatePokemonInput) {
    return this.pokemonService.create(createPokemonInput);
  }

  // @Mutation(() => PokemonGQLModel)
  // updatePokemon(@Args('updatePokemonInput') updatePokemonInput: UpdatePokemonInput) {
  //   return this.pokemonService.update(updatePokemonInput);
  // }

}
