const { ApolloServer }  = require('apollo-server');
const schema = require('./graphql/schema');
const {PORT} = require("./utils/config");
const logger = require("./utils/logger");

const server = new ApolloServer({
  schema,
});

server.listen({ port: PORT }).then(({ url }) => {
  logger.info(`Server running at ${url}`);
});

