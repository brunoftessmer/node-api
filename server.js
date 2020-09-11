const express = require('express');
const mongoose = require('mongoose');

//iniciando app
const app = express();

//iniciando db
mongoose.connect('mongodb://localhost:27017/node-api',{useNewUrlParser:true});
require('./src/models/products.js');
//rota
app.get('/',(req,res) => {
  //res.send('Hello Worldzada');

});

app.listen(3001);