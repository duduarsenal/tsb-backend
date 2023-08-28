const UserService = require('../services/userService')

class UserController{
    constructor(){
        this.userService = new UserService();
    }

    async getAllUsers(req, res){
        try {
            const users = await this.userService.getAllUsers();
            res.status(201).send(users)
        } catch (error) {
            res.status(400).json(error.message)
        }
    }

    async createUsers(req, res){
        const { name, username, password } = req.body;

        try {
            await this.userService.createUser(name, username, password)
            return res.status(201).json({message: "Criado com sucesso"})
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }
}

module.exports = new UserController;