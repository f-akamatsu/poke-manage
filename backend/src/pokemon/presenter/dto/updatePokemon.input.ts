import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { CreatePokemonInput } from './createPokemon.input';

@InputType()
export class UpdatePokemonInput extends PartialType(CreatePokemonInput) {

  @Field(() => ID)
  id: string;

}