const logEvent=require('./logEvents');

const EventEmiter=require('events');

class myemmiter extends EventEmiter{

};

//initialise the objectt

const myemiter=new myemmiter();
//add the listner for log event



myemiter.on('log',(msg)=>{
    logEvent(msg);
});

setTimeout(() => {
    myemiter.emit('log','log event emmited');
    
}, 3000);

