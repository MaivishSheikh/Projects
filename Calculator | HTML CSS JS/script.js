let box = document.getElementById("calc-display");

function toScreen(x) {
    box.value += x;
    if (x === 'C') {
        box.value = "";
    }
}

function answer() {
    x = box.value;
    x = eval(x);
    box.value = x;
}

function sqr() {
    x = box.value;
    x = eval(x*x);
    box.value = x;
}

function BackSpace() {
    let num = box.value;
    let len = num.length-1;
    let newNum = num.substring(0, len);
    box.value = newNum;
}