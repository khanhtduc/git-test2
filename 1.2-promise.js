const getTodo = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false;
            if(!error)
                resolve({ text: 'promise: success' })
            else
                reject()
        }, 2000)     

    })
};

getTodo().then(todo => {
    console.log(todo.text);
});
