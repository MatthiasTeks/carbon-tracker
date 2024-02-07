import { InputType, Field, Int } from 'type-graphql';

@InputType()
export default class ObjectId {
  @Field(() => Int)
  id!: number;
}
