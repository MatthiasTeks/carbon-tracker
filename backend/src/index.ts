import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema } from 'type-graphql';
import BookResolver from './resolvers/bookResolver';
import db from './db';

const port = parseInt(process.env.BACKEND_PORT || '4001', 10);

buildSchema({
  resolvers: [BookResolver],
}).then(async (schema) => {
  await db.initialize();
  const server = new ApolloServer({ schema });
  const { url } = await startStandaloneServer(server, { listen: { port } });
  console.info(`graphql server listeningggxxx  on ${url}`);
});
