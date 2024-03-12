import { Field, InputType } from 'type-graphql';

@InputType()
export default class InputRegister {
  @Field()
  email: string;

  @Field()
  password: string;
}
