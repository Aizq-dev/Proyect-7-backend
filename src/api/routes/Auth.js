const express = require('express')
const { hasValidAuthJwt } = require('../middlewares/authenticated')
const { loginUser, registerUser, getUser, updateUserAvatar } = require('../controllers/user')
const {uploadAvatar} = require('../middlewares/uploadFiles')



const router = express.Router()

router.get('/', hasValidAuthJwt,getUser)

router.post ('/login', loginUser)

router.post('/register',registerUser)

router.post('/upload-avatar',hasValidAuthJwt, uploadAvatar.single('AvatarImg'),updateUserAvatar)

module.exports = router