import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloWorldResolver } from "./resolvers/HelloWorldResolver";
import { port } from "./constants/constants";

export const setupServer = async () => {
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloWorldResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app, cors: true });
  return app;
};

export const startServer = async () => {
  const app = await setupServer();

  app.listen(port, () => {
    /* eslint-disable no-console */
    console.log(`express server has started on port: ${port}`);
  });
};

startServer();
