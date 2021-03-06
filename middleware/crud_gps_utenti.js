const GpsUtenti = require('../model/dati_gps_utenti')
var mongoose = require('mongoose');
module.exports = {
    createGpsAndroid: async (datiGps) =>{
        const gps = new GpsUtenti({
            latitudine: datiGps.latitudine,
            longitudine: datiGps.longitudine,
            altitudine: datiGps.altitudine,
            data_creazione: datiGps.data_creazione,
            data_modifica: null,
            utente: datiGps.utente
        });
        try
        {
            /***
             * aspetto il dato che sia salvato sul db con (await)
             */
            const result = await gps.save();
                return result;
        } catch (err)
            {
                console.log(err);
                let error = {
                    error:"Non sono riuscito a creare l'utente gps"
                }
                return error 
            } 
    },
    getGpsAndroid: async (filter) => {
        try {
            let filterName = Object.keys(filter)
            if(filterName !== undefined && filterName.length > 0){
                console.log(filterName)
                const result = await (await GpsUtenti.find(filter))
                return result;
            }else{
                const result = await GpsUtenti.find();
                return result
            }
            
        } catch (err) {
            let error = {
                error:"Non sono riuscito a trovare il campo richiesto"
            }
            console.log(err);
            return error 
        } 
    },
    getGpsAndroidByUtente: async (filter) => {
        try {
            let filterName = Object.keys(filter)
            if(filterName !== undefined && filterName.length > 0){
                console.log(filterName)
                const result = await (await GpsUtenti.find({ filterName : mongoose.ObjectId(filter[filterName])}))
                return result;
            }else{
                const result = await GpsUtenti.find();
                return result
            }
            
        } catch (err) {
            let error = {
                error:"Non sono riuscito a trovare il campo richiesto"
            }
            console.log(err);
            return error 
        } 
    },
    updateGpsAndroid: async (datiGps) => {
        const gps = {
            _id: datiGps._id,
            latitudine: datiGps.latitudine,
            longitudine: datiGps.longitudine,
            altitudine: datiGps.altitudine,
            data_creazione: datiGps.data_creazione,
            data_modifica: new Date(Date.now()),
            utente: datiGps.utente
        };
        try
        {
            let filter = {_id:datiGps._id}
            const result = await GpsUtenti.findByIdAndUpdate(filter,gps)
            if(result !== undefined){
                return gps
            }
            return result;

        } catch (err)
            {
                console.log(err);
                let error = {
                    error:"Non sono riuscito ad aggiornare GPS con id " + datiGps._id
                }
                return error   
            } 
    },
    cancelGpsAndroid: async (datigps) =>{
        try {
          await GpsUtenti.deleteOne({ _id: datigps._id });
            let res = {
                idGpsDelete: datigps._id
            }
          return res;
        } catch (err) {
            let error = {
                error:"Non sono riuscito a cancellare GPS con ID " + datigps._id
            }
            return error 
        } 
    }
}
dateToString = date => new Date(date).toLocaleDateString();