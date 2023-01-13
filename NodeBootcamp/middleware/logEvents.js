const {v4:uuid}=require('uuid');
const fs=require('fs');
const fspromises=require('fs').promises;
const path=require('path');
const { format } = require('date-fns');

const logEvent=async(message,logName)=>{
    const dateTime=`${format(new Date(),'yyyyMMdd\tHH:mm:ss')}`;
    const logItem=`${dateTime}\t ${uuid()}\t${message}\n`;

    console.log(logName);
    try{
        //what if the directory is not there
        console.log(__dirname);

        await fspromises.appendFile(path.join(__dirname,'..','logs',logName),logItem);

    }
    catch(err){
       

        console.log(err);

    }
}

const logger=(req,res,next)=>{
    logEvent(`${req.method} \t ${req.headers.origin} \t${req.url }`,'reqLog.txt');
    const data=(`${req.method} and ${req.url}`);
    console.log(data);
    next();


};

module.exports={logEvent,logger};
