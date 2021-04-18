
// start a GraphQL server on $PORT (4000)

const {ApolloServer, gql} = require('apollo-server');
const {typeDefs, resolvers} = require('./schema.js');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  engine: {
    apiKey: process.env.ENGINE_API_KEY
  }
});

server.listen({port: process.env.PORT || 4000}).then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});