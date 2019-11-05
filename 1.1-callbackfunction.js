
const getTodo = callback => {
    setTimeout(() => {
        callback({ text: 'callback function: Success' })
    }, 2000)
}

getTodo(todo => {
    console.log(todo.text)
})
console.log("This is the first output")