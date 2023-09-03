import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Pokemon {

  constructor(id: string, name: string, pokedexNo: number) {
    this.id = id;
    this.name = name;
    this.pokedexNo = pokedexNo;
  }

  @Field(() => ID)
  private id: string;

  @Field()
  private name: string;

  @Field(() => Int)
  private pokedexNo: number;
}