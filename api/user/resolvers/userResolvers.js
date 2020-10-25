const arrayUsers = [
    {
        nome: "Adriane",
        ativo: true
    }, {
        nome: "Adler",
        ativo: false
    }
];

const userResolvers = {
    Query: {
        users: () => arrayUsers,
        primeiroUser: () => arrayUsers[0]
    }
};

module.exports = userResolvers;