const {v4:uuid}=require('uuid');
const fs=require('fs');
const fspromises=require('fs').promises;
const path=require('path');
const { format } = require('date-fns');

const logEvent=async(message)=>{
    const dateTime=`${format(new Date(),'yyyyMMdd\tHH:mm:ss')}`;
    const logItem=`${dateTime}\t ${uuid()}\t${message}`;

    console.log(logItem);
    try{
        //what if the directory is not there
        if(!fs.existsSync(path.join(__dirname+'logs'))){
            await fspromises.mkdir('logs',()=>console.log('Director is created'));
        }
        
            await fspromises.appendFile(path.join(__dirname,'logs','eventlog.txt'),logItem);

    }
    catch(err){
        console.log(err);

    }
}

module.exports=logEvent;