const express = require('express')
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/HealthCareLogin");

const userSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    mail_id:String,
    username:String,
    pass_word:String
});

const User = new mongoose.model("User", userSchema)

//routes routes
app.post("/Login",(req,res)=>{
    const mail_id = req.body.mail_id;
    const pass_word = req.body.pass_word;
    User.findOne({mail_id:mail_id},(err,user)=>{
        if(user){
           if(pass_word === user.pass_word){
               res.send({message:"Login sucess",user:user})
           }else{
               res.send({message:"Wrong Credentials"})
           }
        }else{
            res.send("Not Registered.")
        }
    })
});
app.post("/Register",(req,res)=>{
    console.log(req.body) 
    const firstname = req.body.first_name;
    const lastname = req.body.last_name;
    const mail_id = req.body.mail_id;
    const username = req.body.user_name;
    const pass_word = req.body.pass_word;
    User.findOne({mail_id:mail_id},(err,user)=>{
        if(user){
            res.send({message:"User already exist"})
        }else {
            const user = new User({
                firstname,
                lastname,
                mail_id,
                username,
                pass_word
          }); 
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"Sucessfull"})
                }
            })
        }
    })


}) 
app.listen(3001,function()
{
    console.log("Express server is running on port 3001")
})
