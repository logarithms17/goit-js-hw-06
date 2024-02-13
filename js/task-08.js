let loginForm = document.querySelector(".login-form")
let email = document.querySelector(`[name = "email"]`)
let password = document.querySelector(`[type = "password"]`)
console.log(password)
console.log(email.value)

loginForm.addEventListener("submit", (event) => {
    event.preventDefault()

    if (email.value === "" || password.value === "") {
        alert("All fields must be filled in")
    }

    let loginDetails = {
        email: email.value,
        password: password.value,
    }

    console.log(loginDetails)

    loginForm.reset()
})