function addTask() {
    document.getElementById("input").classList.toggle("show")
    document.getElementById("what").classList.toggle("peek")
}
function line() {
    document.querySelector(".three").classList.toggle("cut")
    document.querySelector(".two").classList.toggle("cut")
    document.querySelector(".one").classList.toggle("cut")
} 

document.getElementById("tasks").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values from the form
    let task = document.getElementById("input").value;
    console.log(task)
    let user = document.createElement("p")
    user.appendChild(document.createTextNode(task))
    let div = document.querySelector(".main")
    div.appendChild(user)

    // For demonstration, clear the form fields after printing values
    document.getElementById("input").value = "";
});

