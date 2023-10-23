import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType("Pokedex")
export class PokedexModel {

  @Field((_type) => ID)
  pokedexId: string;

  @Field()
  name: string;

  @Field((_type) => Int)
  pokedexNo: number;

}