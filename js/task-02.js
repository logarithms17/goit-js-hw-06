const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ul = document.getElementById("ingredients")
// let li = document.getElementById("ingredients")
console.log(ul)

// console.log(li)
for (let ingredient of ingredients) {
  console.log(ingredient)
  let li = document.createElement("li");
  // console.log(li)
  li.innerText = ingredient
  ul.appendChild(li)
}

