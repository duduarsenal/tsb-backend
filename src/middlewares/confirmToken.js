const { SECRET, jwt } = require("../config/config")
const User = require('../models/userModel');

const confirmToken = async (req, res, next) => {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token){
        return res.status(400).send({error: true, message: "Unauthorized", status: 401})
    }

    try {
        const { id } = jwt.verify(token, SECRET);

        const userData = await User.findById({_id: id}, '-password -__v');
        
        if (!userData) return res.status(404).send({error: true, message: "User Token Not Found", status: 404});

        req.user = userData;
        next();
    } catch (error) {
        res.status(400).send({error: true, message: "Invalid Token!", status: 401})
    }

}

module.exports = confirmToken;