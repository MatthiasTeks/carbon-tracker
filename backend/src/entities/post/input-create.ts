import { Field, InputType } from 'type-graphql';

@InputType()
export default class InputCreate {
  @Field()
  title: string;

  @Field()
  content: string;
}
