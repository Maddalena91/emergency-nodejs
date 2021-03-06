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
                throw err;
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
            data_modifica: new Date().toLocaleDateString()
        };
        try
        {
            let filter = {_id:user._id}
            const result = await UtentiApp.useFindAndModify(filter,utente)
                return result;

        } catch (err)
            {
                console.log(err);
                throw err;
            } 

    },
    cancelUserAndroid: async (user, req) =>{
      
        try {
          await UtentiApp.deleteOne({ _id: user._Id });
          return user._Id;
        } catch (err) {
          throw err;
        } 
    }

}
dateToString = date => new Date(date).toLocaleDateString();