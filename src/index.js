
import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './graphql/schema'
import resolvers from './graphql/resolvers';
const app = express();

app.use(cors());



const server = new ApolloServer({ typeDefs: schema, resolvers });

// server.applyMiddleware({ app, path: "/graphql" });
app.listen(3000, () => console.log(`listening on port ${process.env.PORT}`));
