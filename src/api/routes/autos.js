const express = require('express')
const { getAllAutos, getAutoById, createAuto, updateAutoById, deleteAuto } = require('../controllers/autos')

const { updateOrRemoveFieldInAutoController } = require('../controllers/BetwenCollectionsController')
const { hasValidAuthJwt } = require('../middlewares/authenticated')
const router = express.Router()


router.get('/',getAllAutos)
router.get('/:id',getAutoById)
router.post('/',hasValidAuthJwt, createAuto)
router.put('/:id',hasValidAuthJwt, updateAutoById)
router.delete('/:id',hasValidAuthJwt,deleteAuto)
router.put('/:idAuto/marca/:idMarca',hasValidAuthJwt,updateOrRemoveFieldInAutoController)




module.exports = router
 