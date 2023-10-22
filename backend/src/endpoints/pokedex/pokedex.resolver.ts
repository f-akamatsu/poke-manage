import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PokedexService } from '../../services/pokedex/pokedex.service';
import { PokedexModel } from './model/pokedex.model';
import { CreatePokemonInput, UpdatePokemonInput } from './input/pokedex.input';

@Resolver()
export class PokedexResolver {
  
  constructor (private pokemonService: PokedexService) {}

  @Query(() => [PokedexModel], { name: 'pokemonAll' })
  findAll() {
    return this.pokemonService.findAll();
  }

  @Query(() => PokedexModel, { name: 'pokemon' })
  findOneById(@Args('pokedexId', { type: () => ID }) id: string) {
    return this.pokemonService.findOneById(id);
  }

  @Mutation(() => PokedexModel)
  createPokemon(@Args('createPokemonInput') createPokemonInput: CreatePokemonInput) {
    return this.pokemonService.create(createPokemonInput);
  }

  @Mutation(() => PokedexModel)
  updatePokemon(@Args('updatePokemonInput') updatePokemonInput: UpdatePokemonInput) {
    return this.pokemonService.update(updatePokemonInput);
  }

}
