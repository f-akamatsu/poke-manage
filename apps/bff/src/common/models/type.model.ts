import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Type {
  @Field((_type) => String)
  id: string;

  @Field((_type) => String)
  name: string;
}
