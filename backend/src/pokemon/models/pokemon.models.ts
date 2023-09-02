import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Pokemon {

  constructor(id: number, name: string, pokedexNo: number) {
    this.id = id;
    this.name = name;
    this.pokedexNo = pokedexNo;
  }

  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Int)
  pokedexNo: number;
}