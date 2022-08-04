// dependencies
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
// const defineCurrentUser = require("./middleware/defineCurrentUser")


// configuration
const PORT = process.env.PORT;
// process.env.NODE_ENV = production or undefined

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(defineCurrentUser)

if(process.env.NODE_ENV === "production"){
app.use(express.static(path.join(__dirname,"client/build")))
}



// root route
app.get('/', (req, res) => {
    res.send('Welcome to the Kula Lodge App!')
});

// Auth routes

app.use("/inventory",require("./conrollers/inventory"))
app.use("/auth",require("./conrollers/jwtAuth"))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname), "../build/index.html");
});



// server listen
app.listen(PORT, () => {
    console.log('We up in here on port ', PORT)
});

