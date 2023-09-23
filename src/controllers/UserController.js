const UserService = require('../services/userService')
const { jwt, SECRET } = require('../config/config')

class UserController{
    constructor(){
        this.userService = new UserService();
    }

    async getAllUsers(req, res){
        try {
            const users = await this.userService.getAllUsers();
            res.status(200).json(users)
        } catch (error) {
            res.status(404).json(error.message)
        }
    }

    async getUser(req, res){
        const { id } = req.user;

        try {
            const user = await this.userService.getUser(id)
            res.status(200).json(user)
        } catch (error) {
            res.status(404).json(error)
        }
    }

    async authUser(req, res){
        const { username, password } = req.body;
        // console.log(username, password);
        if (!username || !password) return res.send({error: true, message: "Empty fields", status: 404});
        
        try {
            const user = await this.userService.authUser(username, password)
            const token = jwt.sign({ id: user.id}, SECRET, { expiresIn: 43200 })
            if (!token){
                throw new Error("Erro ao gerar um token válido")
            }
            return res.send({error: false, message: "User authenticated", status: 200, tokenJWT: token})
        } catch (error) {
            return res.send(error.message)
        }
    }

    async createUser(req, res){
        const { name, username, email, password } = req.body;

        if (!name || !username || !email || !password) {
            return res.send({error: true, message: "Empty fields", status: 404})
        };

        try {
            const createdUser = await this.userService.createUser(name, username, email, password)
            return res.status(201).send({error: false, message: "User sucessfully creadted", status: 201, userID: createdUser._id})
        } catch (error) {
            return res.send(error.message)
        }
    }

    async updateUser(req, res){
        const { name, password } = req.body;
        const { id } = req.user;

        try {
            const updatedUser = await this.userService.updateUser(id, name, password)
            return res.status(200).json({message: "User updated with sucess", updatedUser: updatedUser})
        } catch (error) {
            return res.status(400).json(error.message)
        }
    } 

    async completeRegister(req, res){
        const { document, tel, chavePix } = req.body;
        const { id } = req.user;

        try {
            const updatedUser = await this.userService.completeRegister(id, document, tel, chavePix)
            return res.status(200).json({message: "User updated with sucess", updatedUser: updatedUser})
        } catch (error) {
            return res.status(400).json(error.message)
        }
    } 

    async deleteUser(req, res){
        var { id: deleteID } = req.user;
        const { id } = req.params;

        if (id){
            deleteID = id; 
        }
        
        try {
            const deletedUser = await this.userService.deleteUser(deleteID)
            return res.status(200).json({message: "User deleted with sucess", deletedUser: deletedUser})
        } catch (error) {
            return res.status(400).send(error.message)
        }
    }
}

module.exports = new UserController;