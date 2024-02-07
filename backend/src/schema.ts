import { buildSchema } from 'type-graphql';
import BookResolver from './resolvers/bookResolver';

export default buildSchema({
  resolvers: [BookResolver],
});
