const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

// console.log(dirname)
// app.use(express.static('src/client'));

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
let port = 8081;
app.listen(port, function () {
    console.log(`Example app listening on port ${port}`);
})

app.get('/nlp', function (req, res) {
    res.send('nlp');
})

app.get('/test', function (req, res) {
    console.log('test');
    res.send(mockAPIResponse);
})

const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY
console.log(`Your API Key is ${process.env.API_KEY}`);
