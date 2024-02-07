import { Field, InputType } from 'type-graphql';
import ObjectId from '../../utils';

@InputType()
export default class InputUpdate {
  @Field()
  name?: string | null;

  @Field()
  input?: number | null;

  @Field(() => ObjectId)
  category?: ObjectId;
}
