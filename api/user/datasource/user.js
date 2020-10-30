const { RESTDataSource } = require('apollo-datasource-rest');

class UsersAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:3000';
    }

    async getUsers() {
        const users = await this.get('/users');

        return users.map(async user => ({
            id: user.id,
            nome: user.nome,
            email: user.email,
            ativo: user.ativo,
            role: await this.get(`/roles/${user.role}`)
        }))
    }

    async getUserByID(id) {
        const user = await this.get(`/users/${id}`)
        user.role = await this.get(`/roles/${user.role}`)
        return user;
    }

    async adicionaUser(user) {
        const users = await this.get('/users');
        const role = await this.get(`/roles?type=${user.role}`);
        await this.post('users', { ...user, id: user.id, role: role[0].id });
        
        const newUser = {
            ...user,
            role: role[0]
        };
        
        return newUser;
    }

}

module.exports = UsersAPI;