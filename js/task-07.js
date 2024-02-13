// Write a script that responds to changes in the value of input#font-size-control (input event) and changes the inline style of span#text by updating the font-size property. As a result, the text size will change responding to scrollbar dragging.

let range = document.getElementById("font-size-control")
let text = document.getElementById("text")
console.log(text)
console.log(range)

range.addEventListener("input", (e) => {
    let inputValue = e.target.value
    console.log(inputValue)
    text.style.fontSize = inputValue + "px"
})