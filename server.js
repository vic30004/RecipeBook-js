const express = require('express');
const app = express();
const colors = require('colors');
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());





app.listen(PORT,(req,res)=>{
    console.log(`Server listening on PORT: ${PORT}`.yellow.bold)
})