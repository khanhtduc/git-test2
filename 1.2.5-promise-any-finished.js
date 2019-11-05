let cleanTheRoom = ()=>{
    return new Promise((resolve, reject)=>{
        console.log('cleaning...');
        resolve('cleaned room!');
    })
};

let removeGarbage = () =>{
    return new Promise((resolve, reject)=>{
        console.log('removing...');
        resolve('removed garbage!');
    })
};


Promise.race([cleanTheRoom(), removeGarbage()]).then(()=>{
    console.log('Any of them is finihed!');
});