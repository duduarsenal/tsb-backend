const User = require('../models/userModel');
const bcrypt = require('bcrypt');

class UserService {
    async getAllUsers(){
        try {
            return await User.find().select('-password -__v');
        } catch (error){
            // console.log(error)
            throw new Error(error);
        }
    }

    async getUser(token){
        const { id } = token;
        try {
            const user = await User.findById({_id: id}).select('-password -__v');
            if (!user) throw new Error("User not found")
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }

    async authUser(user, password){
        try {
            const userData = await User.findOne({$or: [{username: user}, {email: user}]})
            if (!userData) throw new Error(JSON.stringify({error: true, message: "User not exists", status: 404}))
            
            const comparePass = bcrypt.compareSync(password, userData.password)

            if(!comparePass) throw new Error(JSON.stringify({error: true, message: "Invalid Password", status: 400}))
        
            const { id, role } = userData;

            return {id, role};
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async createUser(name, username, email, password, role){
        try{
            if(await User.findOne({username: username}, '-password -__v')){
                throw new Error(JSON.stringify({error: true, message: "Username already exists", status: 400}))
            } 

            if(await User.findOne({email: email}, '-password -__v')){
                throw new Error(JSON.stringify({error: true, message: "E-mail already exists", status: 400}))
            }

            const cryptoPass = bcrypt.hashSync(password, 6);
            const createdUser = await User.create({name, username, email, password: cryptoPass, role})

            return createdUser;
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async updateUser(token, name, password){
        const { id } = token;
        
        try {
            const user = await User.findById({_id: id})
            if (!user) throw new Error("User not found")

            const cryptoPass = bcrypt.hashSync(password, 6);

            return await User.findByIdAndUpdate({_id: id}, {name: name, password: cryptoPass}, {new: true}).select('-password -__v')
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteUser(token){

        var { id } = token;

        if (token.deleteID){
            var id = token.deleteID;
        }

        try {
            const user = await User.findById({_id: id}, '-password -__v');
            if (!user) throw ("User not found")

            return await User.findByIdAndDelete({_id: id}).select('-password -__v')
        } catch (error) {
            throw new Error(JSON.stringify({erro: true, message: "Invalid ID", status: 401, typeError: error}))         
        }
    }
}

module.exports = UserService;