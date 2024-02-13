let initialValue = 0

let value = document.getElementById("value")


let decrement = document.querySelector(`[data-action="decrement"]`)
let increment = document.querySelector(`[data-action="increment"]`)
console.log(increment)

increment.onclick = () => {
    initialValue += 1;
    value.innerText = initialValue;
};

decrement.onclick = () => {
    initialValue -= 1;
    value.innerText = initialValue;
};

