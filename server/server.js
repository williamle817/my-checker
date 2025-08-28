require('dotenv').config()

const express = require('express')

// express app
const app = express()

// routes
app.get('/', (req, res) => {
    res.json({mssg: "welcoming"});
})

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening to', process.env.PORT);
});

process.env