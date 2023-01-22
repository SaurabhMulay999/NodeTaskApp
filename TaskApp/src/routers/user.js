const express=require('express');
const router=new express.Router();
const user1=require('../models/user');




router.post('/users',(req,res)=>{
    // console.log(req.body);
    // res.send('Testing purpose');
    
    const USER=new user1(req.body);
    
    //res.send({USER,token});

    USER.save().then((result)=>{
        console.log(result);
        const token=USER.generateAuthToken();

        res.send({USER,token});

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
        const user=await user1.findById(req.params.id);
        //iterate over the array 
        objectUpdates.forEach((updates)=>{
            user[updates]=req.body[updates];
        
        });
        await user.save();
        //const user=await user1.findByIdAndUpdate(req.params.id,req.body,{runValidator:true});
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

//route for signing
router.post('/users/Login',async(req,res)=>{
    //find a user by those credentials
    //byemail or password
    //create a reusble function to do so
    //thought of if email is already exst in our system so user must not sign in with same
    //make the email as unique

    try{
        const user=await user1.findByCredentials(req.body.email,req.body.Password);
        //findBycredentials is not a inbuild function
        const token=await user.generateAuthToken();
        res.send({user,token});


    }
    catch(e){
        res.statusCode(400).send();

    }
})

module.exports=router;
