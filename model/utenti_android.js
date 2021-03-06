const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const utentiSchema = new Schema({
            nome: String,
            cognome: String,
            cellulare:{
                type: String, 
                required:true
            },
            regione:{
                type: String, 
                required:true
            },
            provincia:{
                type: String, 
                required:true
            },
            comune:{
                type: String, 
                required:true
            },
            ultimo_GPS:String,
            data_registrazione:Date,
            data_modifica:Date
},
{
    versionKey: false // You should be aware of the outcome after set to false
}); 
module.exports = mongoose.model('utenti_android',utentiSchema);