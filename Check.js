const mongoose = require('mongoose');

const express = require ('express');
const app = express();

app.use(express.json());

const port = 8000;

// const uri = 'mongodb://localhost:27017'

mongoose.connect('mongodb://localhost:27017/yup')
.then(()=>{console.log("mongodb is now connected");})
.catch((error)=>{console.log(error);})


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
    
})


const User = mongoose.model('user',userSchema)



// post api

app.post('/dhy',async(req,res)=>{
    const{username,password}= req.body
    console.log(req.body);

  await User.create({
    username:username,
    password:password
  })

  res.send({Status:"001", message:"user created"})

})

// get api 
app.get('/read',async(req,res)=>{
  const users = await User.find();
  res.send({Status:"001",allusers:users})
  res.Status(500).send({send:"002",message:"read error"})

})

// find by id and delete user
app.delete('/deleteuser/:user_id',async(req,res)=>{
  const userId = req.params.user_id;
  await User.findByIdAndDelete(userId);
  res.send({status:"001",message:"user deleted"})

})


app.get('/read/:user_id',async(req,res)=>{
  const userId = req.params.user_id;
  await User.findById(userId);
  res.send({status:"001",message:"user find"})


})








app.listen(port,()=>{
    console.log("port done ");
})










