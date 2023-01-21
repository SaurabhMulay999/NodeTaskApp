//all operations related to mongo
//CRUD operations
const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;
//console.log(mongodb);
//define a connection URL - connect to localhost 'mongodb://127.0.0.1:27017
const connectionURL='mongodb://127.0.0.1:27017';
const databaseName='Task-manager';
MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log(error+ 'Unable to connect to database');
    }
    console.log('connected correctly');
    //get a database name where  hava e to connect.. or simply specify name mongo will connect or create it
    const db=client.db(databaseName);
    db.collection('users').insertOne({
        Name:'Saurabh',
        age:24

    },(error,result)=>{
        //result contain some important information
        console.log(result);
        if(error){
            return console.log('Unable to insert');

        }
        
    });

    db.collection('users').insertMany([{
        name:'Saurabh',
        age:129
    },{
        name:'Subres',
        age:122
    }],(error,result)=>{
        if(error){
            return console.log('Error');

        }
        console.log(result);

    })

});
