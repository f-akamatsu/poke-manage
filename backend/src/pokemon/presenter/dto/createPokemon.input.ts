import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePokemonInput {

  @Field()
  name: string;

  @Field(() => Int)
  pokedexNo: number;

}