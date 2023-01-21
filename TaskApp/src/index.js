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