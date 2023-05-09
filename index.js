const express = require('express')
const app = express()
const port  = 3000;
const coffeeCompany_model = require('./coffeeCompany_model')


// app.get('/foo', function (req, res){
//     res.send('Hello, World!')
// });

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/coffee-companies/latest', (req, res) => {
    coffeeCompany_model.getLatestCoffeeCompany()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})