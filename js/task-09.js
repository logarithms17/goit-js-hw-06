function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let colorBtn = document.querySelector(".change-color")
let bgColor = document.querySelector(".color")
console.log(bgColor)

colorBtn.onclick = () => {
  let color = getRandomHexColor()
  console.log(bgColor.innerText)
  bgColor.innerText = color
  document.body.style.backgroundColor = color
}