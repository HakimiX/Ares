const { gql } = require('apollo-server-core');

const Post = gql`
    """
    Posts
    """
    type Post {
        userId: Int!
        id: Int!
        title: String!
        body: String!
        comments: [Comment]
        user: User!
    }

    type Posts {
        posts: [Post]
    }

    type Comment {
        postId: Int!
        id: Int!
        name: String!
        email: String!
        body: String!
    }

    type Geolocation {
        lat: String!
        lng: String!
    }

    type Address {
        street: String!
        suite: String!
        city: String!
        zipcode: String!
        geo: Geolocation
    }

    type Company {
        name: String!
        catchPhrase: String!
        bs: String!
    }

    type User {
        id: Int!
        name: String!
        username: String!
        email: String!
        address: Address!
        phone: String!
        website: String!
        company: Company!
        albums: [Album]
        todos: [Todo]
    }

    type Album {
        id: Int!
        userId: Int!
        title: String!
    }

    type Todo {
        id: Int!
        userId: Int!
        title: String!
        completed: Boolean!
    }
`;

const typedef = () => [Post];

module.exports = typedef;
