var express = require("express");
var bodyparser = require("body-parser");
var cors = require("cors");
var useragent = require('express-useragent')

// make app

var app = module.exports = express();
//set app with basic imports from beging
app.use(bodyparser.json());
app.use(cors());
app.use(useragent.express());

//store everything ina variable!! API
var api = '/api/whoami'

app.get(api, (req, res , next)=>{
    // console.log('im running 100');
    var language = req.acceptsLanguages();
    var software = 'OS: ' + req.useragent.os + ' Browser: ' + req.useragent.browser;
    var ipaddy = req.ip;
    // var software =
    res.json({'ipaddy ' : ipaddy, 'language' : language[1], 'software' : software})

})

app.listen(3000,() =>{
console.log('working server')
})


 

