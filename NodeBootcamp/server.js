const http=require('http');
const path=require('path');
const fs=require('fs');
const fsPromises=require('fs').promises;
const logEvent=require('./logEvents');
const EventEmiter=require('events');
const { ht } = require('date-fns/locale');
const { extname } = require('path');

//we are using port number 3500
console.log(process.env.port);


const port=process.env.port || 3000;
class Emmiter extends EventEmiter{};
//initialise the objectt
const myemiter=new Emmiter();


const serveFile=async(filepath,contentType,res)=>{
    try{
        //res.statusCode=200;
        const data=await fsPromises.readFile(filepath,'utf-8');
        res.writeHead(200,{'Content-Type':contentType});
        res.end(data);


    }
    catch(err){
        console.log(err);
        res.statusCode=500;
        res.end();

    }


}


const server=http.createServer((req,res)=>{
    console.log(req.method,req.url);

    //after loggin with url build a path and server the path 
    let filepath;
    const extention1=path.extname(req.url);
    let contentType;
    switch(extention1){
        case '.css':
            contentType='text/css'
            break;
        default:
            contentType='text/html';    
    }

    //set the value of file path using ternary statement

    filepath=
        contentType=='text/html' && req.url=='/'
            ? path.join(__dirname,'views','index.html')
                :contentType=='text/html' && req.url.slice(-1)==='/'
                    ? path.join(__dirname,'views',req.url,'index.html')
                        :contentType==='text/html'
                            ?path.join(__dirname,'views',req.url)
                                :path.join(__dirname,req.url);

//try to bifercate it and understand what we want to don here
console.log(filepath);
if(!extention1 && req.url.slice(-1)!=='/'){
    filepath+='.html';

}

const fileexist=fs.existsSync(filepath);
if(fileexist){
    serveFile(filepath,contentType,res);


}
else{

    //render 404 simply if file aint exist
    console.log(path.parse(filepath));
    //here we got if we seaech for diff file
    /*
  root: '/',
  dir: '/home/saurabh/NodeBootcamp/views',
  base: 'poker.html',
  ext: '.html',
  name: 'poker'
}
*/


//handle the redirect here if file aint exist
switch(path.parse(filepath).base){
    case 'Old-Page.html':
        res.writeHead(301,{'Location':'/New-page.html'});
        res.end();
        break;
    case 'www-page.html':
        res.writeHead(301,{'Location':'/'});
        res.end();
        break;
    default:
        //serve a 404 response 
        res.writeHead(301,{'Location':'404.html'});
        res.end();




}

}



}).listen(8080,()=>{console.log('server has been started.')})




































//add the listner for log event
// myemiter.on('log',(msg)=>{
//     logEvent(msg);
// });

// setTimeout(() => {
//     myemiter.emit('log','log event emmited');
    
// }, 3000);

// if(request.url='/' || request.url==='index.html'){
//     response.statusCode=200;
//     response.setHeader('Content-Type','text/html');
//     filepath=path.join(__dirname,'views','index.html');
//     fs.readFile(filepath,'utf-8',(err,data)=>{
//         try{
//             response.end(data);

//         }
//         catch(err){
//         console.log('Error aya he bc')
//         }
//     });


