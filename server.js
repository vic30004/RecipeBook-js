const express = require('express');
const app = express();
const colors = require('colors');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
const client = require('./config/db');
dotenv.config({ path: './config/config.env' });

const startServer=async()=>{
  try{
      await client.connect();
  console.log('Connected to Database'.blue.bold);
  }
  catch(err){
    console.log(err)
  }

}
startServer()
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('dev'));



//Routes
app.use("/api/register",require("./routes/auth"))



app.listen(PORT, (req, res) => {
  console.log(`Server listening on PORT: ${PORT}`.yellow.bold);
});
