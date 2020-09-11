const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


//iniciando app
const app = express();

//iniciando db
mongoose.connect('mongodb://localhost:27017/node-api',{useNewUrlParser:true});
requireDir('./src/models/');
const Product = mongoose.model('Product');

//rota
app.get('/',(req,res) => {
  Product.create({
    title: 'React Native',
    description: 'É os guri do beck',
    url: 'http://github.com/facebook/react-native',
  });

});

app.listen(3001);