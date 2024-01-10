const express = require("express");
const cors = require("cors");
const mongoo = require("mongoose");
const dotenv = require('dotenv');
const { default: mongoose } = require("mongoose");

dotenv.config({path:'.env'})

const app = express();

async function  ConnectDB(){
  try {
    await mongoo.connect('mongodb://localhost:27017/mernpos');

    console.log("MongoDB Connected")
  }catch(err){
    console.log(err)
  }
}

ConnectDB();

app.use(cors());
app.use(express.json());

app.get('/api', )

app.listen(process.env.PORT, (con) => {
  console.log(`Server Is listening  : ${process.env.PORT} ` );
});
