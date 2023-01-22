const mongoose=require('mongoose');
const validator=require('validator');

const taskSchema=mongoose.Schema({
    taskdescription:{
        type:String,
        required:true

    },
    isActivated:{
        type:Boolean,
        required:true,
        validate(value){
            

        }
    }
   
});



const task=mongoose.model('TASK-APP-API',taskSchema);

module.exports=task;
