"use strict";

const PORT = 5474;

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.raw({
  inflate: true,
  limit: '1024mb',
  type: 'text/plain'
}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/save-image', function(req, res) {
  var base64Data = req.body.toString().replace(/^data:image\/png;base64,/, "");
  console.log('Image received.');
  fs.writeFile(
    'received-images/' + generateRandomID() + '.png',
    base64Data,
    'base64',
    function(err) {
      if(err) console.log(err);
    }
  );
});

app.listen(PORT, () => console.log('Listening on port ' + PORT));

function generateRandomID() {
  return Math.round(Math.random() * Math.pow(10, 15));
}
