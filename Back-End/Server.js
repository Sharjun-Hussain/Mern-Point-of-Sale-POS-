const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require('dotenv')

dotenv.config({path:'.env'})
const app = express();
app.use(cors());
app.use(express.json());

app.get('/api', )

app.listen(process.env.PORT, (con) => {
  console.log(`Server Is listening  : ${process.env.PORT} ` );
});
