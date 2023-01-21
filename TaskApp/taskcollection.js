const mongodb=require('mongodb');

const mongoclient=mongodb.MongoClient;
const ObjectID=mongodb.ObjectId;

const connectionURL='mongodb://127.0.0.1:27017';
const databaseName='Task-manager';

const id=new ObjectID();
//initialising it
console.log(id);

console.log(id.getTimestamp());

mongoclient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log(error);

    }
    console.log('Connected successfully');
    const db=client.db(databaseName);
    db.collection('Tasks').insertMany([
        {TaskName:'T1',Activate:true},{TaskName:'T2',Activate:false},{TaskName:'T3',Activate:true}
    ],(error,result)=>{
        if(error){
            return console.log('error');


        }
        console.log(result);
    })

    db.collection('users').insertOne({_id:id,name:'vik',age:12},(error,result)=>{
        if(error){
            return console.log('Error');
        }
        console.log(result);


    })
    db.collection('users').findOne({//specify tthe criteria
        name:'Saurabh'


    },(error,user_doc)=>{

        if(error)
        {
            return console.log(error);
        }

        //console.log(user_doc);

    })

    db.collection('users').find({name:'Saurabh'}).toArray((error,result_users)=>{
        console.log(result_users);
    })
   const updatepromise=db.collection('users').updateOne({
    _id:new ObjectID("63c62693d6cb4200fbb2a437"),
   },{
    $set:{
        name:'SarabhDeshpande'
    }
   }); 
   
   setTimeout(() => {
    console.log(updatepromise);
    
   }, 1000);

   console.log(updatepromise);
//first arg is search criteria
db.collection('users').deleteMany({age:24}).then((result)=>{
    console.log(error);

}).catch((error)=>{
    console.log(error);
})


    
})