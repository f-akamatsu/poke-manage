import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Pokemon {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Int)
  pokedex_no: number;
}