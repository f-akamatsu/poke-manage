import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdatePokemonInput {
  @Field(() => String)
  pokemonId: string;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  pokedexNo: number;
}
