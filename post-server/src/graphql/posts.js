const { gql } = require('apollo-server-core')
const apiService = require('../services/api.service');

const typeDefs = gql`
    extend type Query {
        posts: [Post]
        post(id: ID!): Post
    }
    
    type Post {
        id: ID!
        userId: Int
        title: String
        user: User
        todos: Todo
        albums: Album
    }
    
    type User {
        id: ID!
        name: String
        username: String
    }
    
    type Todo {
        id: ID!
        userId: Int
        title: String
        completed: Boolean
    }
    
    type Album {
        id: ID!
        userId: Int
        title: String
    }
`;

/*
* The received a couple of arguemnts.
* The 'obj' is the root object, and is used to make relations.
* The 'args' are the function arguments that are defiend in the type (i.e. id: ID!)
* */
const resolvers = {
  Query: {
    posts: async () => apiService.getPosts(),
    post: async (obj, args, context, info) => apiService.getPostById(args.id)
  },
  Post: {
    user: async (obj, args, context, info) => apiService.getUserById(obj.userId),
    todos: async (obj, args, context, info) => apiService.getTodoById(obj.userId),
    albums: async (obj, args, context, info) => apiService.getAlbumsById(obj.userId)
  }
}

module.exports = {
  typeDefs,
  resolvers
}
