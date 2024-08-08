const express = require('express')
const { getAllMarcas, getMarcaById, createMarca, updateMarcaById, deleteMarca, updateLogoImg } = require('../controllers/marca')
const { updateElementsController } = require('../controllers/BetwenCollectionsController')
const { hasValidAuthJwt } = require('../middlewares/authenticated')
const { uploadLogo } = require('../middlewares/uploadFiles')

const router = express.Router()


router.get('/',getAllMarcas)
router.get('/:id',getMarcaById)
router.post('/',hasValidAuthJwt, createMarca)
router.put('/:id',hasValidAuthJwt, updateMarcaById)
router.put('/:idMarca/modelo/:idAuto',hasValidAuthJwt,updateElementsController)
router.delete('/:id',hasValidAuthJwt, deleteMarca)
router.post('/upload-logo',hasValidAuthJwt, uploadLogo.single('LogoImg'),updateLogoImg)




module.exports = router
 