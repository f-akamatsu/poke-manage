import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType("Pokedex")
export class PokedexModel {

  @Field((_type) => ID)
  pokedexId: string;

  @Field((_type) => String)
  pokemonName: string;

  @Field((_type) => Int)
  pokedexNo: number;

}