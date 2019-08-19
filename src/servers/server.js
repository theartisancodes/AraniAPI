import { ApolloServer } from "apollo-server-express";
import { schema, resolvers } from "graphql/index";

const Server = (schema, resolvers) => {
  return new ApolloServer({ typeDefs: schema, resolvers });
};

module.exports = {
  Server
};
