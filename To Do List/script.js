console.log("Welcome to my to do list")

function addTask() {
    let e = prompt('Enter Your Task: ')
    console.log(e)
    let task = document.createElement('p')
    task.innerHTML = e
    document.getElementById('cont').appendChild(task)
    task.classList.add('t')
}
