import { InputType, Field, ID, PartialType, Int } from '@nestjs/graphql';

@InputType()
export class CreatePokemonInput {

  @Field()
  name: string;

  @Field(() => Int)
  pokedexNo: number;

}

@InputType()
export class UpdatePokemonInput extends PartialType(CreatePokemonInput) {

  @Field(() => ID)
  pokedexId: string;

}