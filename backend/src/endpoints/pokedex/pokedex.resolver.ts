import { Args, ID, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PokedexService } from '../../services/pokedex/pokedex.service';
import { PokedexModel } from './model/pokedex.model';
import { CreatePokemonInput, UpdatePokemonInput } from './input/pokedex.input';
import { PokedexType } from 'src/services/pokedex/type/pokemon.type';

@Resolver(() => PokedexModel)
export class PokedexResolver {
  
  constructor (private pokemonService: PokedexService) {}

  @Query(() => [PokedexModel], { name: 'pokemonAll' })
  findAll(): Promise<PokedexType[]> {
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
