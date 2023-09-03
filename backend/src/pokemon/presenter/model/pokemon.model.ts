import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType("Pokemon")
export class PokemonGQLModel {

  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => Int)
  pokedexNo: number;

}