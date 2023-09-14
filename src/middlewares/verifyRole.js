const verifyRole = (req, res, next) => {

    const { id, role } = req.user;

    if (!id || !role){
        return res.status(400).send({error: true, message: "Unauthorized", status: 401})
    }

    if (role !== 'admin') {
        return res.status(400).send({error: true, message: "Unauthorized", status: 401})
    }

    next();
}

module.exports = verifyRole;