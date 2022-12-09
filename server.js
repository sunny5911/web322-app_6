/********************************************************************************* 
*  WEB322 – Assignment 6 
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.   
*  No part of this assignment has been copied manually or electronically from any other source 
*  (including web sites) or distributed to other students. 
*  
*  Name: Sunny  Student ID: 128365210 Date: 10-12-2022
* 
*  Online (Cyclic) URL: https://red-troubled-tortoise.cyclic.app/
* 
********************************************************************************/
var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Sunny - 128365210");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);