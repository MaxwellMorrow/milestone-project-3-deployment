// dependencies
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
// const path = require('path');
const bodyParser = require("body-parser");
const defineCurrentUser = require("./middleware/defineCurrentUser")
// configuration
const PORT = process.env.PORT;


// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.resolve(__dirname, "../frontend/build"))); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(defineCurrentUser)



// root route
app.get('/', (req, res) => {
    res.send('Welcome to the Kula Lodge App!')
});

// Auth routes
app.use('/users', require('./conrollers/users'))
app.use('/authentication', require('./conrollers/authentication'))



// server listen
app.listen(PORT, () => {
    console.log('We up in here on port ', PORT)
});

