const { error } = require("console");

const express= require('express');
const app = express();
const Port= 3000;

app.listen(Port,(error)=>{
    error ? console.log(error):console.log(`listen port ${Port}`);
});