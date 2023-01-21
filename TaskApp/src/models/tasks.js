const mongoose=require('mongoose');

const task=mongoose.model('TASK-APP-API',{
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

module.exports=task;
