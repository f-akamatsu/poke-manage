import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Pokemon {
  @Field((_type) => String)
  pokemonId: string;

  @Field((_type) => String)
  name: string;

  @Field((_type) => Int)
  pokedexNo: number;

  @Field((_type) => String)
  typeId1: string;

  @Field((_type) => String, { nullable: true })
  typeId2?: string;
}
