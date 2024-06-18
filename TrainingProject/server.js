import { ApolloServer } from "@apollo/server";
import { resolversExample } from "./resolvers.js";
import { readFile } from 'node:fs/promises';
import express from 'express';
import cors from 'cors';
import {expressMiddleware as apolloMiddleWare} from '@apollo/server/express4';

const PORT = 9001;

const typeDefsExample = await readFile(
    "./schema.graphql",
    "utf-8"
  );

  const app = express();
const apolloServer = new ApolloServer({ 
    typeDefs : [typeDefsExample], 
    resolvers: [resolversExample] });
    await apolloServer.start();
    app.use(cors(),express.json(), apolloMiddleWare(apolloServer));
    app.use('/graphql', apolloMiddleWare(apolloServer));
    
    app.listen({ port: PORT }, () => {
        console.log(`Server running on port ${PORT}`);
        console.log(`GraphQL endpoint: http://localhost:${PORT}/graphql`);
    });
