let inputName = document.getElementById("name-input")
let outputName = document.getElementById("name-output")
console.log(outputName.innerText)


inputName.addEventListener("input", (e) => {
    console.log(e.target.value)
    let inputValue = e.target.value
    console.log(inputValue)
    outputName.innerText = inputValue
})