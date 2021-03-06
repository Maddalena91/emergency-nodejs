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
            data_registrazione:  {
                type: Date, 
                required:true
            },
            data_modifica:Date
            /*creator:{
                type: Schema.Types.ObjectId,
                ref: 'Utenti_App'
            } per tabella gps*/
},
{
    versionKey: false // You should be aware of the outcome after set to false
}); 
module.exports = mongoose.model('UtentiApp',utentiSchema);