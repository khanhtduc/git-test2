const getTodo = () => {
    return new Promise((resolve, reject) => {
        let error = true;
        if (!error)
            resolve({ text: "Async-Await: Success!" });
        else
            reject();
    }
    )
}

async function fetchTodo() {
    try {
        const todo = await getTodo();
        return todo;
    } catch (error) {
        console.log("Error occurred at fetchTodo")
    }
  
}

fetchTodo()
    .then(td => console.log(td.text))
    .catch(td2 => console.log('Error at catch'));