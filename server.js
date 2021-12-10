const express = require('express')
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/HealthCareLogin");

app.use("/",require("./routes/userRoute"));
 

app.listen(3001,function()
{
    console.log("Express server is running on port 3001")
})