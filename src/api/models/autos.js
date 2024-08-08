const mongoose = require("mongoose");

const AutoSchema = new mongoose.Schema({
    modelo: {type: String, required: true, trim:true},
    precio: {type: Number, required: true, trim:true},
    marca:{type:mongoose.Types.ObjectId,ref:"Marca" ,required: true},
    año: {type: Number},
   

},{
    collection: 'Auto'
})

const Auto = mongoose.model('Auto', AutoSchema)

module.exports={Auto}