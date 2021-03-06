const UtentiApp = require('../model/user-android')
module.exports = {
    createUserAndroid: async (user) => {
        console.log(user)
        const utente = new UtentiApp({
            nome: user.nome,
            cognome: user.cognome,
            cellulare: user.cellulare,
            regione: user.regione,
            provincia: user.provincia,
            comune: user.comune,
            data_registrazione: new Date().toLocaleDateString(),
            data_modifica:null
        });
        try
        {
            /***
             * aspetto il dato che sia salvato sul db con (await)
             */
            const result = await utente.save();
                return result;
        } catch (err)
            {
                console.log(err);
                let error = {
                    error:"Non sono riuscito a creare l'utente"
                }
                return error 
            } 
    },
    
    getUserAndroid: async (filter) => {
        try {
            let filterName = Object.keys(filter)
            if(filterName !== undefined){
                const result = await UtentiApp.findOne({ filterName : filter[filterName] });
                return result;
            }else{
                const result = await UtentiApp.find();
                return result
            }
            
        } catch (err) {
            let error = {
                error:"Non sono riuscito a trovare l'utente con ID " + utente._id
            }
            return error 
        } 
    },

    updateUserAndroid: async (user) => {
        const utente = {
            _id: user._id,
            nome: user.nome,
            cognome: user.cognome,
            cellulare: user.cellulare,
            regione: user.regione,
            provincia: user.provincia,
            comune: user.comune,
            data_registrazione: user.data_registrazione,
            data_modifica: new Date(Date.now())
        };
        console.log(utente);
        try
        {
            let filter = {_id:user._id}
            const result = await UtentiApp.findByIdAndUpdate(filter,utente)
            if(result !== undefined){
                return utente
            }
            return result;

        } catch (err)
            {
                console.log(err);
                let error = {
                    error:"Non sono riuscito ad aggiornare l'utente con ID " + utente._id
                }
                return error   
            } 

    },
    cancelUserAndroid: async (user, req) =>{
        try {
          await UtentiApp.deleteOne({ _id: user._id });
          return user._Id;
        } catch (err) {
            let error = {
                error:"Non sono riuscito a cancellare l'utente con ID " + utente._id
            }
            return error 
        } 
    }

}
dateToString = date => new Date(date).toLocaleDateString();