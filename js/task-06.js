// Write a script that, when focus on input is lost (blur event), checks its contents for the correct number of entered characters.

// The number of characters in the input is specified in its data-length attribute.
// If the number of characters entered is correct, the input's border turns green, or red with a wrong number.


let validationInput = document.getElementById("validation-input")

let expectedLength = parseInt(validationInput.getAttribute("data-length"))

validationInput.addEventListener("blur", (e) => {
    if (validationInput.value.length === expectedLength) {
        validationInput.classList.remove(`invalid`)
        validationInput.classList.add(`valid`)
    }  else {
      validationInput.classList.remove('valid');
      validationInput.classList.add('invalid');
    }
})