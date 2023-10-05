const express = require('express')
const router = express.Router();
const UserController = require('../controllers/UserController')

const confirmToken = require('../middlewares/confirmToken');
const verifyRole = require('../middlewares/verifyRole');

// Free Routes
router.post('/register', (req, res) => UserController.createUser(req, res))
router.post('/auth', (req, res) => UserController.authUser(req, res))

// Authenthicated Routes
router.get('/getone', confirmToken, (req, res) => UserController.getUser(req, res))
router.patch('/cregister', confirmToken, (req, res) => UserController.completeRegister(req, res))
router.delete('/', confirmToken, (req, res) => UserController.deleteUser(req, res))

// Admin Routes
router.get('/getall', confirmToken, verifyRole, (req, res) => UserController.getAllUsers(req, res))
router.patch('/', confirmToken, verifyRole, (req, res) => UserController.updateUser(req, res))
router.delete('/:id', confirmToken, verifyRole, (req, res) => UserController.deleteUser(req, res))

module.exports = router;