// // const mongoose = require('mongoose')

// // const express = require ('express')

// // const app = express();

// // app.use(express.json());

// // const port = 8000;


// // mongoose.connect('mongodb://localhost:27017/typo')
// // .then(()=>{console.log("MongoDb is now connected");})
// // .catch((err)=>{console.log(err);})


// // const userSchema = mongoose.Schema({
// //     fullName: {
// //         type: String,
// //         required: true
// //         },
// //      lastName:{
// //         type:String,
// //         required:true
// //      },

// // })

// // const User = mongoose.model('user',userSchema)

// // app.post('/chandra',async(req,res)=>{
// //     const {fullName,lastName}= req.body;

// //     await User.create ({
// //         fullName:fullName,
// //         lastName:lastName


// //     })
// //      res.send({Status:  '001' , 
// //         Message:" target achieved"})
// // })


// // app.listen(port,()=>{
// //     console.log("mission completed");
// // })



// const mongoose = require('mongoose')
// const express = require('express');
// const { status } = require('express/lib/response');
// const app = express();
// app.use (express.json());
// const port = 8000;


// mongoose.connect('/mongodb://localhost:27017/rtf')
// .then(()=>{console.log("your mongoDb is now connected");})
// .catch((err)=>{console.log(err);})


// const userSchema = mongoose.Schema({
//     firstname:{
//         type:String,
//         requird:true
//     },
//     lastname:{
//         type:String,
//         required:true
//     }
// })

// const User = mongoose.model('user',userSchema)

// app.post('/btr',async(req,res) => {
//     const {firstname,lastname} = req.body;

//   await User.create({
   
//     firstname:firstname,
//     lastname:lastname,

  

//     })
//       res.send({ Status:'001',
//         Message :"target achieved" })

    
// })
// app.get('read',async(req,res)=>{
//     const users = await User.find();
//     res.send({Status:"001",AllUsers});
//     res.send({Status:"002",
//        Message:"Error reading users"
//     })       

//        })
//            app.get('read',async(req,res)=>{
//      const users = await User.find();
//      res.send({Status:"001",AllUsers});
//      res.send({Status:"002",
//         Message:"Error reading users"
//      })       

//         })
//         //  create
// app.post('/devesh', async (req, res) => {
//     const { name, email, age } = req.body


//     //  create 
//     await user.create({
//         name: name,
//         email: email,
//         age: age
//     })
//     res.send({
//         status: "001",
//         message: "successful"
//     })

// })

// //  read all user api api
// app.get('/read', async (req, res) => {
//     const users = await user.find()
//     res.send(users);

//     res.send({ status: "001", message: "read api completed" })
// })




// //  read particular id
// app.get('/read/:id', async (req, res) => {
//     const user_id = req.params.id
//     const user = await user.findById(user_id)
//     res.send({ status: "001", user })
// })



// // delete 

// // app.delete('/deleteuser/:user_id', async(req, res)=>{
// //     const user_id = req.params.user_id;
// //     await user.findOneAndDelete({_id :user_id})
// //     res.send({status:"001", message:"successful"})

// // })
// app.listen(port,()=>{
//     console.log("work done");
// })

const mongoose = require("mongoose")
const express = require("express")
const app = express();
app.use(express.json());

const port = 8000;

mongoose.connect('mongodb://localhost:27017/yup/hgj')
.then(()=>{console.log("mongo is working");})
.catch((err)=>{console.log(err);})


const userSchema = new mongoose.Schema({
    username:String,
    password:String
})

const User = mongoose.model('user',userSchema)


app.post('/post,',(req,res)=>{
    const{username,password}= req.body

    User.create({
        username:username,
        password:password
    })

    res.send({status:'001',Message: "user created"})

})


app.get('/read',async()=>{
    const users = await User.find();
    res.send({Status:"001",allusers:users})
})


// app.delete('/deleteuser/:user_id',async()=>{
//     const userId = req.params.user_id;
//     await User.findByIdAndDelete(userId)

// })


app.delete('/deleteuser/:user_id',async()=>{
    const userId =req.params.user_id
    await User.findByIdAndDelete(userId)
})

app.delete('/deleteuser/:user_id',async()=>{
    const userId = req.param.user_id
    await User.findByIdAndDelete(userId)
})