const getTodo = () => {
    return new Promise((resolve, reject) => {
        let error = false;
        if (!error)
            resolve({ text: 'Async-Await: Success!' });
        else
            reject('Async-Await: Error happend!')
    })
}

// getTodo().then(td=>console.log(td.text));
async function fetchTodo () {
    const todo = await getTodo();
    return todo;
}
fetchTodo().then( td=> console.log(td.text));