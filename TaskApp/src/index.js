const express=require('express');
require('./db/mongoose');
const user1=require('./models/user');
const tasks=require('./models/tasks');
const { ObjectID } = require('bson');
const { isValidObjectId } = require('mongoose');
const { json } = require('express');
const app=express();
const port=process.env.PORT || 3000;

//Impoer the router-usersRouter
const UseRouter=require('./routers/user');

//import the router taskone
const taskUseRouter=require('./routers/task');
//configure the express to automatically get the data passed as a json format or parse data in json

app.use(express.json());
app.use(UseRouter);
app.use(taskUseRouter);

app.listen(port,()=>{
    console.log('Port has been started succesfully');
})

// const bcrypt=require('bcrypt');

// const myfunc=async()=>{
//     const password='poker@133';
//     const hashedVersion=await bcrypt.hash(password,8);
//     //8 is number of epoch so it is not too much and too less so balanced for speed and good hashing
//     console.log(password,hashedVersion);
//     const ismatched=await bcrypt.compare('121212',hashedVersion);
//     console.log(ismatched);

// }
// myfunc();

//jsonwebToken ->

const jwt=require('jsonwebtoken');
const myfunction=async()=>{
    const token=jwt.sign({_id:'12345678'},'abcdefzghi',{expiresIn:'7 days'});
    console.log(token);
    //how to varify the token
    const data=jwt.verify(token,'abcdefzghi');
    //That second argument is secret strng...
    console.log(data);

}
myfunction();