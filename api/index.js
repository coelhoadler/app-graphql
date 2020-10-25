const { ApolloServer, gql } = require('apollo-server');

const users = [
    {
        nome: "Adriane",
        ativo: false
    }, {
        nome: "Adler",
        ativo: false
    }
];

const typeDefs = gql `
    type User {
        nome: String!
        ativo: Boolean!
        email: String
    }
`;


const server = new ApolloServer({typeDefs, resolvers});
