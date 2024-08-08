const mongoose = require("mongoose");

const MarcaSchema = new mongoose.Schema({
    
    marca:{type: String, required: true},
    logo: {type: String ,required: true},
    modelos: [{type:mongoose.Types.ObjectId, ref:"Auto"}],
    grupo: {type: String, required: true}

},{
    collection: 'Marca'
})

const Marca = mongoose.model('Marca', MarcaSchema)

module.exports={Marca}