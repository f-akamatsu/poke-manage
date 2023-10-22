import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType("Pokedex")
export class PokedexModel {

  @Field(() => ID)
  pokedexId: string;

  @Field()
  name: string;

  @Field(() => Int)
  pokedexNo: number;

}