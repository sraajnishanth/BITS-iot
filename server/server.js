const express = require('express');
const axios = require('axios');
var app = express();

// Serve all the files in '/dist' directory
app.use(express.static('../dist'));

// Handle a get request to an api route
app.get('/api/getCarData', function (req, res) {

    try{
        axios.get("https://5z915pi0ce.execute-api.ap-south-1.amazonaws.com/default/GetCarData?ID=c2")
               .then(data => res.status(200).send(data))
               .catch(err => res.send(err));
     }
     catch(err){
        console.error("GG", err);
     }
  });

// Handle a get request to an api route
// app.get('/your-api-route/:id', function (req, res) {

//   // You can retrieve the :id parameter via 'req.params.id'
//   res.send(`Did GET /your-api-route/${req.params.id}!`);
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});