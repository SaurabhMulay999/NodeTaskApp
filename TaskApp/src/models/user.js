const mongoose=require('mongoose');
const validator=require('validator');



const users=mongoose.model('USER',{Name:{
    type:String,
    required:true

},age:{
    type:Number,
    default:0,
    validate(value){
        if(value<0){
            throw new Error('The age must be positive number');
        }
    }

},
email:{
    type:String,
    required:true,
    trim:true,
    lowercase:true,
    validate(value){
        if(!validator.isEmail(value)){
            throw new Error('Email is invalid')
        }
    }
}


});

module.exports=users;