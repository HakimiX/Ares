const {ApolloServer} = require("apollo-server");
const {PORT} = require("./utils/config");
const logger = require("./utils/logger");

const server = new ApolloServer({
  modules: [
    require('./graphql/posts')
  ]
});

server.listen({ port: PORT }).then(({ url }) => {
  logger.info(`Server running at ${url}`);
});
