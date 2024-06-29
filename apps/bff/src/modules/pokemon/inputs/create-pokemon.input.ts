import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreatePokemonInput {
  @Field(() => String)
  name: string;

  @Field(() => Int)
  pokedexNo: number;
}
