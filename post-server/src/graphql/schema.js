const { gql } = require('apollo-server-core')
const post = require('./post/typedef');
const postResolver = require('./post/resolver');
const {makeExecutableSchema} = require("graphql-tools");

const RootQuery = gql`
    type Query {
        "Get post by id"
        post(
            "Post id"
            postId: Int
        ): Post
        "Get all posts"
        posts: [Post]

        "Get comments"
        comments: [Comment]

        "Get comments by id"
        comment(
            "Comment id"
            commentId: Int
        ): Comment

        "Get users"
        users: [User]

        "Get user by id"
        user(
            userId: Int
        ): User

        "Get albums"
        albums: [Album]
    }
`;

const SchemaDefinition = gql`
    schema {
        query: Query
    }
`;

const typeDefs = [
  SchemaDefinition,
  RootQuery,
  post
];

const resolvers = {
    Query: {
        post: postResolver
    }
}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

module.exports = schema;
