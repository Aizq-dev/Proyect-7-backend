
const { Auto } = require('../models/autos');
const { Marca } = require('../models/marcas');


const updateElementsInMarca = async (idMarca, idAuto) => {

    try {
        const marca = await Marca.findById(idMarca);

        if (!marca) {
            throw new Error('Marca no encontrada');
        }

        const index = marca.modelos.indexOf(idAuto);
        if (index === -1) {
            marca.modelos.push(idAuto);
        } else {
            marca.modelos.splice(index, 1);
        }

        await marca.save();
        return marca;
    } catch (error) {
        throw new Error(`Error updating document: ${error.message}`);
    }
};



const updateOrRemoveFieldInAuto = async (idAuto, newMarcaId) => {
    
    try {
        const update = newMarcaId ? { marca: newMarcaId } : { $unset: { marca: "" } };
        const updatedAuto = await Auto.findByIdAndUpdate(idAuto, update, { new: true });

        if (!updatedAuto) {
            throw new Error('Document not found');
        }

        return updatedAuto;
    } catch (error) {
        throw new Error(`Error updating document: ${error.message}`);
    }
};



module.exports = { updateElementsInMarca ,updateOrRemoveFieldInAuto };
