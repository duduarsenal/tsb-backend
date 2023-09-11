const { SECRET, jwt } = require("../config/config")

const confirmToken = (req, res, next) => {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token){
        return res.status(400).send({error: true, message: "Unauthorized", status: 401})
    }

    try {
        const userData = jwt.verify(token, SECRET)
        req.token = userData;
        next();
    } catch (error) {
        res.status(400).send({error: true, message: "Invalid Token!", status: 401})
    }

}

module.exports = confirmToken;