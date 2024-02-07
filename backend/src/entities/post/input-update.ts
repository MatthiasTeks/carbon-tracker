import { Field, InputType } from 'type-graphql';

@InputType()
export default class InputUpdate {
  @Field()
  title?: string;

  @Field()
  content?: string;
}
