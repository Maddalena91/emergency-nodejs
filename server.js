var express = require('express');
var userapp = require('./middleware/crud-user-android')
var credenzialiDB = require('./config/env')
var mongoose = require('mongoose');
const { response } = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
/***
 * Connessione con il DB e metto in ascolto il server
*/

mongoose.connect(credenzialiDB.url, {"auth": {"authSource": "admin"
    }, user: credenzialiDB.username, pass: credenzialiDB.password, useNewUrlParser: true ,useUnifiedTopology: true})
.then(res => {
    // POST method route
    app.post('/userapp', function (req, res) {
        let resp = userapp.createUserAndroid(req.body)
        res.send(resp);
    });
    // PUT method route
    app.put('/userapp', function (req, res) {
        let resp = userapp.updateUserAndroid(req.body)
        res.send(resp);
    });
    // DELETE method route
    app.delete('/userapp', function (req, res) {
        let resp = userapp.cancelUserAndroid(req.body)
        res.send(resp);
    });


    app.listen(5000, (req, res) => {
        console.log(`Server is running on 5000 port.`);
    })
})
.catch(err => console.log(err))

