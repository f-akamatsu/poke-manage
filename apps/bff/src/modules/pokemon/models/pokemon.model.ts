import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Pokemon {
  @Field(() => String)
  pokemonId: string;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  pokedexNo: number;

  @Field(() => String)
  typeId1: string;

  @Field(() => String, { nullable: true })
  typeId2?: string;

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
