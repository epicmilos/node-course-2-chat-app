const path = require('path');//buildin nodejs module
const express = require('express');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();
app.use(express.static(publicPath));//middleware conf.

//console.log(__dirname+'../public');
//console.log(publicPath);
app.listen(port, ()=>{
    console.log(`Server up on port ${port}`);
});


