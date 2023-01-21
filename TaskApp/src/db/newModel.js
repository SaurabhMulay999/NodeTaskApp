const mongoose=require('mongoose');
const { stringify } = require('postcss');
mongoose.connect('mongodb://127.0.0.1:27017/Task-App-API');

const task=mongoose.model('TASK-APP-API',{
    taskdescription:{
        type:String,
        required:true

    },
    isActivated:{
        type:Boolean,
        required:true
    }

});

const newtask=new task({
    taskdescription:'This is task related to u1',
    isActivated:true
})

newtask.save().then((result)=>{
    console.log(result);
})