

const {Auto} = require('../models/autos');
const { setError } = require('../../config/error');




const getAllAutosFromDB = async()=>{
    try {
        const autos = await Auto.find()
        .populate({
            path: 'marca',
            model: 'Marca',
            select:{
                _id:true,
                marca:true
              
            }}).lean()
            
        return autos;
    } catch (error) {
        setError('400','Error al obtener todo los autos de la base de datos')
        
    }
};

const getAutoByIdFromDB = async(id)=>{
    try {
        const auto = await Auto.findById(id)
        .populate({
            path: 'marca',
            model: 'Marca',
            select:{
                _id:false,
                marca:true,
                // grupo:true,
              
            }})
            console.log('>>>',auto)
    return auto
    } catch (error) {
        setError('400','Error al obtener el auto por la ID de la base de datos')
    }
    
}

const CreateAutoInDB = async(payload)=>{
    try {
        const newAuto = new Auto(payload)
    
    return newAuto
    } catch (error) {
        setError('400','Error crear un auto en la base de datos')

    }
    
}
const updateAutoByIdInDB = async(id,payload)=>{
  try {
    const updateAuto = await Auto.findByIdAndUpdate(id, {$set: payload}, {new:true})
    return updateAuto
  } catch (error) {
    setError('400','Error al modificar el auto por la ID en la base de datos')

  }
    
}
const deleteAutoInDB =async(id)=>{
    try {
         await Auto.deleteOne({_id:id})
    return
    } catch (error) {
        setError('400','Error al borrar el auto por la ID de la base de datos')

    }
   
}
module.exports={getAllAutosFromDB,getAutoByIdFromDB,CreateAutoInDB,updateAutoByIdInDB,deleteAutoInDB}

