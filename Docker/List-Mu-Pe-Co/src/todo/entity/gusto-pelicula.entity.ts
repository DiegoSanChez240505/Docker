import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Gusto {
  @Field(() => Int)
  id: number;

  @Field()
  description: string;

  @Field()
  done: boolean;
}

@ObjectType()
export class Pelicula {
  @Field(() => Int)
  id: number;

  @Field()
  description: string;

  @Field()
  done: boolean;
}
