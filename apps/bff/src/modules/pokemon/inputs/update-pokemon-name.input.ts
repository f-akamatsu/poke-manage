import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdatePokemonNameInput {
  @Field(() => String)
  pokemonId: string;

  @Field(() => String)
  name: string;
}
