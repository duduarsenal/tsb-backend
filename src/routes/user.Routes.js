const express = require('express')
const router = express.Router();
const UserController = require('../controllers/UserController')

const confirmToken = require('../middlewares/confirmToken');
const verifyRole = require('../middlewares/verifyRole');

router.post('/register', (req, res) => UserController.createUser(req, res))
router.post('/auth', (req, res) => UserController.authUser(req, res))

router.get('/getall', confirmToken, (req, res) => UserController.getAllUsers(req, res))
router.get('/getone', confirmToken, (req, res) => UserController.getUser(req, res))

router.patch('/', confirmToken, (req, res) => UserController.updateUser(req, res))

router.delete('/', confirmToken, (req, res) => UserController.deleteUser(req, res))
router.delete('/:id', confirmToken, verifyRole, (req, res) => UserController.deleteUser(req, res))

module.exports = router;