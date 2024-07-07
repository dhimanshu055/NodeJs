// 1st we have to require (mongoose, express{app,json} and port)

const mongoose = require('mongoose')


const express = require('express')
const app = express();

app.use(express.json())         

// const uri = 'mongodb://localhost:27017/'
const port = 8000;






//after we will estabilsh a connection between mongodb and express
mongoose.connect('mongodb://localhost:27017/current')
.then(()=>{console.log("MongoDB connected ");})
.catch((err)=>{console.log(err);})


                        


// after we will create schema and will use in model

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
        type:String,
        required:true
    }
})


// create a model and use the schema  
const User = mongoose.model('user', userSchema)


// create a APi


app.post('/sparta', async(req, res)=>{
    // console.log(req.body);
    const { Name, salary, unit } = req.body;
   await User.create({
        Name:Name,
        salary:salary,
        unit:unit
    })
    // response to show on postman 
    res.send({status:"001", 
              message:"target achieved"})
    console.log("done");
})

//  READ
app.get('/read', async(req, res) => {
    
        const users = await User.find();
        res.send(users);
    // response to show on postman 
        res.send({status: "002", 
                  message: "Error reading users"});
    
});
// Delete

app.delete('/deleteuser/:user-id',async(res,req)=>{
    const userId = req.param.user_id
    await User.findOneAndDelete({_id:userId})
    // response to show on postman 
    res.send({Status:"001",message:"kam ho gya hai bhai "})
  })

app.listen(port, ()=>{
    console.log("port run");
})

