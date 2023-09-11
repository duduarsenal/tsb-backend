const express = require('express')
const router = express.Router();
const UserController = require('../controllers/UserController')
const confirmToken = require('../middlewares/confirmToken')

router.post('/register', (req, res) => UserController.createUser(req, res))
router.post('/auth', (req, res) => UserController.authUser(req, res))

router.get('/', confirmToken, (req, res) => UserController.getAllUsers(req, res))
router.get('/:id', confirmToken, (req, res) => UserController.getUser(req, res))
router.patch('/:id', confirmToken, (req, res) => UserController.updateUser(req, res))
router.delete('/:id', confirmToken, (req, res) => UserController.deleteUser(req, res))

module.exports = router;