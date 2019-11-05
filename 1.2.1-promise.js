
let promise = new Promise((resolve, reject) =>{
    let isClean = true;
    if (isClean)
        resolve('Cleaned!');
    else
        reject('Dirty!');

});
promise.then((msg)=>{
    console.log(msg);
}).catch((msg)=>{
    console.log(msg);
});