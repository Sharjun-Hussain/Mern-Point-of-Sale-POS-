const express = require('express')
const cors= require('cors')
const mongoose = require('mongoose')



const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req,res)=>{
    res.status(200).json({
        "message":"Hello"
    })
})

app.listen(8000, ()=>{
    console.log("Server Is listening ");
})