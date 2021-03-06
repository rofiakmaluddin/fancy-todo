const router = require('express').Router()
const UserController = require('../controllers/userController')

router.post('/signUp', UserController.signUp)
router.post('/signIn', UserController.signIn)
router.post('/googleLogin', UserController.googleLogin)

module.exports = router