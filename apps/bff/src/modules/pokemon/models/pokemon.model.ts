import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Type } from 'src/common/models/type.model';

@ObjectType()
export class Pokemon {
  @Field((_type) => String)
  pokemonId: string;

  @Field((_type) => String)
  name: string;

  @Field((_type) => Int)
  pokedexNo: number;

  @Field((_type) => Type)
  type1: Type;

  @Field((_type) => Type, { nullable: true })
  type2?: Type;
}
