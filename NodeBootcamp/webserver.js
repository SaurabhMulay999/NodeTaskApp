const fs=require('fs');
const url=require('url');
const http=require('http');
const path=require('path');
const { unescape } = require('querystring');
const { isSourceFile } = require('typescript');
const { extname } = require('path');

const mimeTypes={
    html:'text/html',
    javascript:'text/javascript',
    css:'text/css'
}
//const myuri=''
http.createServer((request,response)=>{
    let myuri=url.parse(request.url).pathname;
    let filename=path.join(process.cwd(),unescape(myuri));
    console.log(filename,myuri);
    let loadfile;
    try{
        //simply load the file
        loadfile=fs.lstatSync(filename);

    }
    catch(error){
        console.log(error);      
    }

    if(loadfile.isFile()){
        //inorder to find the extention do following
        var mimetype=mimeTypes[path.extname(filename).split('.').reverse()[0]];
        //write a head for it
        response.writeHead(200,{'Content-Type':'mimetype'});
        var filestream=fs.createReadStream(filename);
        console.log(filestream);

        //pipe this filestream
        filestream.pipe(response);



    }

    else if(loadfile.isDirectory()){
        //302 means yes there is directory we are moving into it
        response.writeHead(302,{'Location':'index.html'});
        response.end();
    }
    else{

        response.writeHead(404,{'Content-Type':'text/plain'});
        response.write('500 internal error');
        response.end();
    }


}).listen(3000,()=>{
    console.log('Server is running');
})