const express=require('express');
const router=new express.Router();
const user1=require('../models/user');




router.post('/users',(req,res)=>{
    // console.log(req.body);
    // res.send('Testing purpose');
    const USER=new user1(req.body);
    USER.save().then((result)=>{
        console.log(result);
        res.send(USER);

    }).catch((error)=>{console.log(error);})

});

router.get('/users',(req,res)=>{
    //use mongoose...Queries.
    //passing empty obj as criteria will fetch all objs

    user1.find({}).then((users)=>{
        res.send(users);

    }).catch((Err)=>{
        console.log('User not found');
    })

})

router.get('/users/:id',(req,res)=>{
    //use mongoose...Querie
    console.log(req.params);
    
   
    user1.findById(ObjectID(req.params.id)).then((result)=>{
        if(!result){
            return res.status(404).send();
        }
        res.send(result);
    });
    //return res.send(user1);


})

router.patch('/users/:id',async(req,res)=>{
    //figure out what is allowdd to update below
    const objectUpdates=Object.keys(req.body);
    const allowedUpdates=['Name','email','age'];
    const validator_Updates=objectUpdates.every((update)=>{
        if(allowedUpdates.includes(update)){
            return true;
        }
        return false;
    })
    if(!validator_Updates){
        return res.statusCode(400).send('This is not valid properties to update');
    }
    try{
        //use method findByIdAndUpdate
        const user=await user1.findByIdAndUpdate(req.params.id,req.body,{runValidator:true});
        if(!user){
            return res.statusCode(404).send();
        }
        res.send(user);
        console.log(user);
    }
    catch(e){
        console.log('Record not found')
    }
})

module.exports=router;
