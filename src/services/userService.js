const User = require('../models/userModel');

class UserService {
    async getAllUsers(){
        try {
            return await User.find();
        } catch (error){
            // console.log(error)
            throw new Error(error);
        }
    }

    async createUser(name, username, password){
        try{
            User.create({name, username, password})
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = UserService;