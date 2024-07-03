const passwordBox = document.getElementById('password')
const copyBtn = document.getElementById('copyBtn')
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const characters = '~!@#$%^&*_-[]{}|'


passwordBox.value = generatePassword()

function generatePassword() {
    const numbersAllowed = document.getElementById('numbers').checked
    const symbolsAllowed = document.getElementById('symbols').checked
    let length = document.getElementById('rangeInput').value
    const passwordLength = length
    let allChars = letters 
    if(numbersAllowed) {
        allChars = letters + numbers
    }
    if(symbolsAllowed == true) {
        allChars = letters + characters
    }
    let password = ''
    while(passwordLength > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    passwordBox.value = password
    return password
}

function copyPassword() {
    navigator.clipboard.writeText(password)
}
