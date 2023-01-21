const doworkpromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
       //return resolve([1,2,3]);
       return reject('promise rejeccted');

    },2000)
}).then((param)=>{console.log(param,'the promise has been resolved')})
.catch((param)=>{
    console.log(param);
});

