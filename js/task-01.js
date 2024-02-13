let h2 = document.getElementsByTagName("H2")
let categories = document.getElementsByClassName("item")
// console.log(categories)
// console.log(h2[0].innerHTML)
// console.log(h2.length)
console.log(`Number of catergories: ${h2.length}`)

for (let category of categories) {
    console.log(category)
    // console.log(category.firstElementChild)
    // console.log(category.firstChild)
    // console.log(category.firstElementChild.innerHTML)
    console.log(`Category: ${category.firstElementChild.innerHTML}`)
    console.log(category.firstElementChild.nextElementSibling.children.length)
}









// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5