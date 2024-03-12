import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export default class Message {
  @Field()
  success: boolean;

  @Field()
  message: string;
}
