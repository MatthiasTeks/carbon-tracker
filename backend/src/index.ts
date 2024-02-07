import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import db from './db';
import schema from './schema';

const port = parseInt(process.env.BACKEND_PORT || '4001', 10);

// eslint-disable-next-line @typescript-eslint/no-shadow
schema.then(async (schema) => {
  await db.initialize();
  const server = new ApolloServer({ schema });
  const { url } = await startStandaloneServer(server, { listen: { port } });
  console.info(`graphql server listeningggxxxcccc  on ${url}`);
});
