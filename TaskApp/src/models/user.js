const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
//use  mongoose middleware...
const userSchema=new mongoose.Schema({
    Name:{
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
    unique:true,
    trim:true,
    lowercase:true,
    validate(value){
        if(!validator.isEmail(value)){
            throw new Error('Email is invalid')
        }
    }
}
,
Password:{
    type:String,
    require:true,
    validate(val){
        if(val.length<8){
            throw new Error('Password length atleast 8 ');
        }

    }
},

tokens:[{
    token:{
        type:String,
        required:true
    }
}]



});

userSchema.statics.findByCredentials=async(email,Password)=>{
    //binding this is not goin to play a role so it is okay
    const user=await users.findOne({email});
    if(!user){
        throw new Error('Unable to Login');

    }
    //else varify the password
    const ismatch=await bcrypt.compare(Password,user.Password);
    if(ismatch){
        console.log('Password Matched');
        return user;
        

    }
    else{
        throw new Error('Unable to log in');
        console.log('No Match,Do you wanted to creat a account');
    }

    

}

userSchema.methods.generateAuthToken=async function(){
    //we need a this binding so normal function has been used and methods used on instances
    //while the statics used on the mongoose models, statics methods also called model methods
    const user=this;
    //generate a JWT
    const token=jwt.sign({_id:user._id.toString()},'abcdefghi');

    user.tokes=user.tokens.push({token});
    await user.save();

    return token;


}



//pre will work before the user gets save and post will work after user gets save
userSchema.pre('save',async function(next){
    //this is standard functin instead of arrow function because this binding will take imp role here
    const user=this;
    //we simply call next after we done with the fuction writing so imp to call next at the end of fuction
    console.log('Just before saving');

    //only have to hash password one time
    if(user.isModified('Password')){
        console.log('Hashing password');
        user.Password=await bcrypt.hash(user.Password,8);
        //so if patch method modify the password the just again hash it
        
    }

    next();

})

const users=mongoose.model('USER',userSchema);
//here we have created saparate schema and saprate model

module.exports=users;