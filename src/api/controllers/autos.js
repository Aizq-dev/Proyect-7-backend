
const { getAllAutosFromDB, getAutoByIdFromDB, CreateAutoInDB, updateAutoByIdInDB, deleteAutoInDB } = require("../repositories/autos");


const getAllAutos = async(req,res,next)=>{
  const autos = await getAllAutosFromDB()
  res.status(200).json({data: autos})
}

const getAutoById = async(req,res,next)=>{
  const {id} = req.params
  const auto= await getAutoByIdFromDB(id)
  res.status(200).json({data: auto})
}

const createAuto = async(req,res,next)=>{
  
  const newAuto = await CreateAutoInDB(req.body)
  await newAuto.save()
  res.status(201).json({data: newAuto})
}

const updateAutoById = async(req,res,next)=>{
  const {id}=req.params
  const payload = req.body
  const updateAuto = await updateAutoByIdInDB(id,payload)
  res.status(200).json({data: updateAuto})
}
const deleteAuto = async(req,res,next)=>{
  const {id} = req.params

  await deleteAutoInDB(id)
  res.status(200).json({data: 'auto borrado'})
}

module.exports={getAllAutos,getAutoById,createAuto,updateAutoById,deleteAuto}
