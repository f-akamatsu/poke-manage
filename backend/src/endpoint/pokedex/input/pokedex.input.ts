import { InputType, Field, ID, PartialType, Int } from '@nestjs/graphql';

@InputType()
export class CreatePokedexInput {

  @Field()
  name: string;

  @Field(() => Int)
  pokedexNo: number;

}

@InputType()
export class UpdatePokedexInput extends PartialType(CreatePokedexInput) {

  @Field(() => ID)
  pokedexId: string;

}