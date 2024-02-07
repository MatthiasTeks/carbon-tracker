import { Field, InputType } from 'type-graphql';

@InputType()
export default class InputLogin {
  @Field()
  email: string;

  @Field()
  password: string;
}
