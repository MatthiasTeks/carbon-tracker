import { Field, InputType } from 'type-graphql';
import ObjectId from '../../utils';

@InputType()
export default class InputUpdate {
  @Field()
  name?: string;

  @Field()
  input?: number;

  @Field(() => ObjectId)
  category?: ObjectId;
}
