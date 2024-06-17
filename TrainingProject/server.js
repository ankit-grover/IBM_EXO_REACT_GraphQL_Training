import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolversExample } from "./resolvers.js";
import { readFile } from 'node:fs/promises';

const PORT = 9001;

const typeDefsExample = await readFile(
    "./schema.graphql",
    "utf-8"
  );


const server = new ApolloServer({ 
    typeDefs : [typeDefsExample], 
    resolvers: [resolversExample] });
const {url} = await startStandaloneServer(server, { listen: { port: PORT } });
console.log(`Server running at ${url}`);
