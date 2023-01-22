const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Task-App-API');



const newtask=new task({
    taskdescription:'This is task related to u1',
    isActivated:true
})

newtask.save().then((result)=>{
    console.log(result);
})