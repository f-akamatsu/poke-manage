import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DeletePokemonInput {
  @Field(() => String)
  pokemonId: string;
}
