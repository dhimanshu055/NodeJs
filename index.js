const mongoose = require('mongoose')
const express = require('express')
const app = express();
app.use(express.json())
// const uri = 'mongodb://localhost:27017/'
const port = 8000;






// connection
mongoose.connect('mongodb://localhost:27017/current')
.then(()=>{console.log("MongoDB connected ");})
.catch((err)=>{console.log(err);})



// schema 

const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    unit:{
        type:String,
        required:true
    },
    salary:{
        type:BigInt,
        required:true
    }
})


// model 
const User = mongoose.model('user', userSchema)


// create


app.post('/sparta', async(req, respnse)=>{
    // console.log(req.body);
    const { Name, salary, unit } = req.body;
   await User.create({
        Name:Name,
        salary:salary,
        unit:unit
    })
    respnse.send({status:"001", message:"target achieved"})
})

app.listen(port, ()=>{
    console.log("port run");
})

