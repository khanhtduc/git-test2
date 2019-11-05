let cleanTheRoom = ()=>{
    return new Promise((resolve, reject) => {
        console.log('cleaned!');
        resolve('cleaned room!');
    });
}

let removeGarbage = () =>{
    return new Promise((resolve, reject)=>{
        console.log('removed!');
        resolve('removed garbage!');
    });
};


Promise.all([cleanTheRoom(), removeGarbage()]).then(()=>{
    console.log('All are finished!');
});