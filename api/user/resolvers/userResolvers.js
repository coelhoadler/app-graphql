const { GraphQLScalarType } = require('graphql')

const userResolvers = {
    DateTime: new GraphQLScalarType({
        name: 'DateTime',
        description: 'string de data e hora ISO-8601',
        serialize: (value) => value.toISOString(),
        parseValue: (value) => new Date(value),
        parseLiteral: (ast) => new Date(ast.value)
    }),
    Query: {
        users: (root, args, { dataSources }) =>  dataSources.usersAPI.getUsers(),
        user: (root, { id }, { dataSources}) => dataSources.usersAPI.getUserByID(id)
    },
    Mutation: {
        adicionaUser: async (root, user, { dataSources }) => dataSources.usersAPI.adicionaUser(user),
        atualizaUser: async (root, user, { dataSources }) => dataSources.usersAPI.atualizaUser(user),
        deletarUser: async (root, { id } , { dataSources }) => dataSources.usersAPI.deletarUser(id),
    }
};

module.exports = userResolvers;