const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const datiGpsSchema = new Schema({
    latitudine:{
        type: String, 
        required:true
    },
    longitudine:{
        type: String,
        required: true
    },
    altitudine:{
        type: String,
        required:true
    },
    data_creazione:{
        type: Date, 
        required:true
    },
    data_modifica:Date,
    utente:{
        type: Schema.Types.ObjectId,
        ref: 'utenti_android'
    }
},
{
    versionKey: false // You should be aware of the outcome after set to false
}); 
module.exports = mongoose.model('dati_gps_utenti',datiGpsSchema);
