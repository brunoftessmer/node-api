const express = require('express');

const app = express();

app.get('/',(req,res) => {
  res.send('Hello World dos guri');

});

app.listen(3001);