const { updateElementsInMarca, updateOrRemoveFieldInAuto } = require('../repositories/BetwenCollections');


const updateElementsController = async (req, res, next) => {
    const { idMarca, idAuto } = req.params;
    

    try {
        const updatedDocument = await updateElementsInMarca(idMarca, idAuto);
        res.status(200).json({ data: updatedDocument });
    } catch (error) {
        next(error);
    }
};


const updateOrRemoveFieldInAutoController = async (req, res, next) => {
    const { idAuto } = req.params;
    const  newMarcaId  = req.params.idMarca;


    try {
        if (newMarcaId ){
        const updatedAuto = await updateOrRemoveFieldInAuto(idAuto, newMarcaId);
        res.status(200).json({ data: updatedAuto });
        return
    }
    
    
    } catch (error) {
        next(error);
    }}


module.exports = { updateElementsController, updateOrRemoveFieldInAutoController}