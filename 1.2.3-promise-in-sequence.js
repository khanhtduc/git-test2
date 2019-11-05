let cleanTheRoom = ()=> {
    return new Promise((resolve, reject) =>{
        resolve('cleaned room');
    })
};

let removeGarbage = (msg) =>{
    return new Promise((resolve, reject) =>{
        resolve(msg+ ', remove garbage')
    })
};

let winIceCream = (msg) =>{
    return new Promise((resolve, reject)=>{
        resolve(msg+ ', won ice cream')
    })
};
//To make sure the order of happening
cleanTheRoom().then((msg)=>{
    console.log(msg);
    return removeGarbage(msg);
}).then((msg)=> {
    console.log(msg);
    return winIceCream(msg);
}).then((msg)=>{
    console.log('Finished: '+msg);
});



