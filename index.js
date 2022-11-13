const yf = require('yahoo-stocks');
const {lookup, history} = require('yahoo-stocks')
const PORT = process.env.PORT || 5000
const express = require('express');
const app = express();
const { response } = require('express');
const cors = require('cors');


const print = console.log;


app.use(cors())


app.get('/dxy', function(req, res) {
    
    history('DX=F', {range: "1d", interval:"1m"}).then(response => {
        print("Good!")
        print(response.previousClose);
        res.json(response.records);

    });


})


app.get('/btc', function(req, res) {
    
    history('BTC-USD', {range: "1d", interval:"1m"}).then(response => {
        print("Good!")
        print(response.previousClose);
        res.json(response.records);

    });


})

app.get('/qqq', function(req, res) {
    
    history('QQQ', {range: "1d", interval:"1m"}).then(response => {
        print("Good!")
        print(response.previousClose);
        res.json(response.records);

    });


})




app.listen(PORT, () => print('SERVER RUNNING ON PORT: ' + PORT))
