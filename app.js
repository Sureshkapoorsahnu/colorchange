const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red', 'blue', 'green', 'yellow', 'pink ', 'violet']
body.style.background = ['lightgreen']
button.addEventListener('click', changeB)

function changeB() {
    const colorIndex = parseInt(Math.random() * color.length)
    body.style.background = color[colorIndex]
}