import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PokedexService } from '../../service/pokedex/pokedex.service';
import { PokedexModel } from './model/pokedex.model';
import { CreatePokedexInput, UpdatePokedexInput } from './input/pokedex.input';
import { PokedexType } from '../../service/pokedex/type/pokemon.type';

@Resolver(() => PokedexModel)
export class PokedexResolver {
  
  constructor (private pokedexService: PokedexService) {}

  @Query(() => [PokedexModel], { name: 'pokedexAll' })
  findAll(): Promise<PokedexType[]> {
    return this.pokedexService.findAll();
  }

  @Query(() => PokedexModel, { name: 'pokedex' })
  findOneById(@Args('pokedexId', { type: () => ID }) id: string) {
    return this.pokedexService.findOneById(id);
  }

  @Mutation(() => PokedexModel)
  createPokemon(@Args('createPokedexInput') createPokedexInput: CreatePokedexInput) {
    return this.pokedexService.create(createPokedexInput);
  }

  @Mutation(() => PokedexModel)
  updatePokemon(@Args('updatePokedexInput') updatePokedexInput: UpdatePokedexInput) {
    return this.pokedexService.update(updatePokedexInput);
  }

}
