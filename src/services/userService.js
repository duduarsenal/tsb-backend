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

    async getUser(id){
        try {
            const user = await User.findById({_id: id})
            if (!user) throw new Error("User not found")
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }

    async authUser(user, password){
        try {
            const userID = await User.exists({$or: [{username: user, password: password}, {email: user, password: password}]})
            if (!userID) throw new Error(JSON.stringify({error: true, message: "User not exists", status: 404}))
            return userID
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async createUser(name, username, email, password){
        try{
            if(await User.findOne({username: username}) || await User.findOne({email: email})) throw new Error("User already exists")

            const createdUser = await User.create({name, username, email, password})
            return createdUser;
        } catch (error) {
            throw new Error(error)
        }
    }

    async updateUser(id, name, password){
        try {
            const user = await User.findById({_id: id})
            if (!user) throw new Error("User not found")

            return await User.findByIdAndUpdate({_id: id}, {name: name, password: password}, {new: true})
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteUser(id){
        try {
            const user = await User.findById({_id: id})
            if (!user) throw new Error("User not found")

            return await User.findByIdAndDelete({_id: id})
        } catch (error) {
            throw new Error(error)            
        }
    }
}

module.exports = UserService;