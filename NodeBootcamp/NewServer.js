const express=require('express');
const path=require('path');
const app=express();
const port=process.env.port || 3500;
//const logEvent=require('./middleware/logEvents');
const {logger}=require('./middleware/logEvents');
const cors=require('cors');

app.use(logger);


app.use(cors);
//cross origin rosource sharing



//MiddleWare
//create a specific middleware....Buildin,custom and third party are types of middleware
//app.use we use to apply middleware
app.use(express.urlencoded({extended:false}));
//so for which use we have to use this middleware...it is use to handle url encoded data or form data

//bbuild in middleware for json
app.use(express.json());

//serve static files.....Middleware

app.use(express.static(path.join(__dirname,'/public')));




app.get('/index(.html)?',(req,res)=>{
    //res.sendFile('./views/index.html',{root:__dirname});
    res.sendFile(path.join(__dirname+'/views/','index.html'));

});

app.get('/New-page(.html)?',(req,res)=>{
    //res.sendFile('./views/index.html',{root:__dirname});
    res.sendFile(path.join(__dirname+'/views/','New-page.html'));

});

app.get('/old-page(.html)?',(req,res)=>{
   
   res.redirect(301,'/New-page.html');
  //this redirect have status code of 302 by default we can specifically mentioned 301 as in first arg 

});


// app.get('/chain.html',[one,two,three]);

app.listen(port,()=>{console.log('server has been started.')})
