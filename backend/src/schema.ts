import { buildSchema } from 'type-graphql';
import BookResolver from './resolvers/bookResolver';
import UserResolver from './resolvers/user/user-resolver';
import customAuthChecker from './lib/auth-checker';

export default buildSchema({
  resolvers: [BookResolver, UserResolver],
  validate: false,
  authChecker: customAuthChecker,
});
