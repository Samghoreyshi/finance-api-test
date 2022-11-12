const yf = require('yahoo-stocks');
const {lookup, history} = require('yahoo-stocks')
const PORT = process.env.PORT || 5000
const express = require('express');
const app = express();
const { response } = require('express');
const cors = require('cors');
app.use(cors())


app.get('/results', function(req, res) {
    
    history('EURUSD=X').then(response => {
        console.log("Good!")
        res.json(response);

    });


})



app.listen(PORT, () => console.log('SERVER RUNNING ON PORT: ' + PORT))
