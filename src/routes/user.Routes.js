const express = require('express')
const router = express.Router();
const UserController = require('../controllers/UserController')

router.get('/', (req, res) => UserController.getAllUsers(req, res))

router.post('/', (req, res) => UserController.createUsers(req, res))

module.exports = router;