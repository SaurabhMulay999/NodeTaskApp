const express=require('express');
const router=new express.Router();
const tasks=require('../models/tasks');
const { findById } = require('../models/user');


router.post('/tasks',(req,res)=>{
    //we already have used express.json() middleware so whatevery body parsed will come here in req.body frmat
    //for tasks
    const task=new tasks(req.body);
    console.log(task);
    task.save().then((result)=>{
        console.log(result);
        res.send(task);

    }).catch((error)=>{
        console.log('Operation failed.-->',error);
    })
    
})

//getting user by id


//two endpoints to etch tasks
router.get('/tasks',(req,res)=>{
    //use mongoose...Queries.
    //passing empty obj as criteria will fetch all objs

    tasks.find({}).then((tasks)=>{
        res.send(tasks);

    }).catch((Err)=>{
        console.log('User not found');
    })

})

router.get('/tasks/:id',(req,res)=>{
    //use mongoose...Queries.
    //passing empty obj as criteria will fetch all objs
    

    tasks.findById(req.params.id).then((tasks)=>{
        
        res.send(tasks);

    }).catch((tasks)=>{
        res.send(404).send();
    })

})



router.patch('/tasks/:id',async(req,res)=>{
const allowOperations=['taskdescription','isActivated'];
const Object_Task=Object.keys(req.body);
const functionto_checkOperation=allowOperations.every((task)=>{
    if(allowOperations.includes(task)){
        return true;
    }
    else{
        return false;
        
    }
})
if(!functionto_checkOperation){
    res.statusCode(400).send('Not a valid property');
}
try{

    const taskdata=await tasks.findById(req.params.id);
    console.log(taskdata);
    Object_Task.forEach((tasks_1)=>{
        taskdata[tasks_1]=req.body[tasks_1];
    })
    console.log(taskdata);

    await taskdata.save();
    res.statusCode(200).send();



    //const TaskData=await tasks.findByIdAndUpdate(req.params.id,req.body,{runValidators:true});
    //console.log(TaskData);
    //res.send(TaskData);
}
catch(e){
    console.log(e)}
});


module.exports=router;