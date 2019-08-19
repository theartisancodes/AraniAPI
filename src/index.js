import "dotenv/config";
import cors from "cors";
import express from "express";
import { ApolloServer } from "apollo-server-express";

const app = express();

app.use(cors());

const schema = {};
const resolvers = {};

const server = new ApolloServer({ typeDefs: schema, resolvers });

// server.applyMiddleware({ app, path: "/graphql" });
app.listen(3000, () => console.log(`listening on port ${process.env.PORT}`));
