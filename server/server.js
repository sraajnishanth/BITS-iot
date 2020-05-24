const express = require('express');
const axios = require('axios');
var app = express();

// Serve all the files in '/dist' directory
app.use(express.static('../dist'));

// Handle a get request to an api route
app.get('/api/getCarData', function (req, res) {

    try{
        var api = "https://f3auomefki.execute-api.ap-south-1.amazonaws.com/default/GetCarData?CarID=C1";
        axios.get(api)
                .then((response) => {
                    res.status(200).send(response.data)
                })
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
  console.log('Group-12 OBD app listening on port 3000!');
});