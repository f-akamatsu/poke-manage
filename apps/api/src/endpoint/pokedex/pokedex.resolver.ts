import { Args, ID, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PokedexService } from '../../service/pokedex/pokedex.service';
import { MoveByLevelUpModel, PokedexModel } from './model/pokedex.model';
import { CreatePokedexInput, UpdatePokedexInput } from './input/pokedex.input';
import { PokedexType } from '../../service/pokedex/type/pokedex.type';
import { MoveByLevelUpDataloader } from './pokedex.dataloader';

@Resolver(() => PokedexModel)
export class PokedexResolver {
  constructor(
    private pokedexService: PokedexService,
    private pokedexDataloader: MoveByLevelUpDataloader
  ) {}

  @ResolveField(() => [MoveByLevelUpModel])
  async moveByLevelUpList(@Parent() pokedex: PokedexModel) {
    return this.pokedexDataloader.load(pokedex.pokedexId);
  }

  @Query(() => [PokedexModel])
  allPokedex(): Promise<PokedexType[]> {
    return this.pokedexService.findAllPokedex();
  }

  @Query(() => PokedexModel)
  pokedexById(@Args('pokedexId', { type: () => ID }) id: string) {
    return this.pokedexService.findPokedexById(id);
  }

  @Mutation(() => PokedexModel)
  createPokedex(@Args('createPokedexInput') createPokedexInput: CreatePokedexInput) {
    return this.pokedexService.create(createPokedexInput);
  }

  @Mutation(() => PokedexModel)
  updatePokedex(@Args('updatePokedexInput') updatePokedexInput: UpdatePokedexInput) {
    return this.pokedexService.update(updatePokedexInput);
  }
}
