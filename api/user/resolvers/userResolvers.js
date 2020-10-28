const userResolvers = {
    Query: {
        users: (root, args, { dataSources }) =>  dataSources.usersAPI.getUsers(),
        user: (root, { id }, { dataSources}) => dataSources.usersAPI.getUserByID(id)
    }
};

module.exports = userResolvers;