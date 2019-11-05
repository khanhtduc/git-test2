const getTodo = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            let error = true;
            if (!error)
                resolve({text:'Promise: Success'});
            else 
                reject({text:'Promise: Error happen!'});                
        }, 2000);

    })
};

getTodo()
    .then(td=>{console.log(td.text);})
    .catch(td => console.log(td.text));