const express= require('express')

const autoRouter = require('./autos')
const marcaRouter = require('./marca')
const authRouter = require('./Auth')
const router = express.Router()


router.use('/autos',autoRouter)
router.use('/marca',marcaRouter)
router.use('/auth',authRouter)

module.exports= router