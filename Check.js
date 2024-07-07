const mongoose = require('mongoose');

const express = require ('express');
const app = express();

app.use(express.json());

const port = 8000;

const uri = 'mongodb://localhost:27017'

mongoose.connect('uri/yup')
.then(()=>{console.log("mongodb is now connected");})
.catch((error)=>{console.log(error);})


const userSchema = new mongoose.Schema({
    Name:{
        type:string,
        required:true
    }
})


const User = mongoose.model('user',userSchema)



// post api

app.post('/dhy',async(req,res)=>{
    const{Name}= req.body

  await User.create({
    Name:Name
  })

  res.send({Status:"001", message:"user created"})

})









app.listen(port,()=>{
    console.log("port done ");
})










