// import { lookup, history } from 'yahoo-stocks';
const yf = require('yahoo-stocks');
const {lookup, history} = require('yahoo-stocks')
const PORT = process.env.PORT || 5000
const express = require('express');
const app = express();
const { response } = require('express');


app.get('/results', function(req, res) {
    
    history('AAPL').then(response => {
        console.log("Function Running Correctly")
        res.json(response);

    });


})



app.listen(PORT, () => console.log('SERVER RUNNING ON PORT: ' + PORT))
