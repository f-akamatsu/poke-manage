import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdatePokemonBaseStatsInput {
  @Field(() => String)
  pokemonId: string;

  @Field(() => Int)
  hitPoints: number;

  @Field(() => Int)
  attack: number;

  @Field(() => Int)
  defense: number;

  @Field(() => Int)
  spAttack: number;

  @Field(() => Int)
  spDefense: number;

  @Field(() => Int)
  speed: number;
}
