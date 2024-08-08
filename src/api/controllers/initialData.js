const seed = require("../../seed/seed")
const { Marca } = require("../models/marcas");
const {Auto}=require('../models/autos')

const { getAllMarcasFromDB} = require('../repositories/marcas')
const { getAllAutosFromDB } = require('../repositories/autos')
const initialData = async(req,res,next)=>{
  const autos = await getAllAutosFromDB()
  const marcas = await getAllMarcasFromDB()
  if(autos.length === 0){
    Auto.insertMany(seed.autos).then(console.log("Insertados los autos desde la seed"))
  }
  if(marcas.length === 0){
  Marca.insertMany(seed.marcas).then(console.log("Insertados las marcas de la seed"))}

}  

module.exports={initialData}