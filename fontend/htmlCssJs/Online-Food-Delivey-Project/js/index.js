import { foodItem } from "./fooditem.js"
console.log(foodItem);

function filterItem(foodItem, cate) {
    return foodItem.filter(item => item.category === cate);
}

function htmlMap(domElement, ElementData) {
    ElementData.map(
        item => {
            const itemCard = document.createElement('div');
            itemCard.setAttribute("id", "item-card");

            const cardTop = document.createElement('div');
            cardTop.setAttribute('id', 'card-top');

            const star = document.createElement('i');
            star.setAttribute('class', 'fa fa-star');
            star.setAttribute('id', 'rating');
            star.innerText = ' ' + item.rating;

            const heart = document.createElement('i');
            heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
            heart.setAttribute('id', item.id);

            cardTop.appendChild(star);
            cardTop.appendChild(heart);

            const img = document.createElement('img');
            img.src = "../" + item.img;

            const itemName = document.createElement('p');
            itemName.setAttribute('id', 'item-name');
            itemName.innerText = item.name;

            const itemPrice = document.createElement('p');
            itemPrice.setAttribute('id', 'item-price');
            itemPrice.innerText = 'Price : $ ' + item.price;

            itemCard.appendChild(cardTop);
            itemCard.appendChild(img);
            itemCard.appendChild(itemName);
            itemCard.appendChild(itemPrice);

            domElement.appendChild(itemCard)
        }
    )
}

function displayItems() {
    const biryani = document.getElementById('biryani');
    const chicken = document.getElementById('chicken');
    const paneer = document.getElementById('paneer');
    const vegetable = document.getElementById('vegetable');
    const chinese = document.getElementById('chinese');
    const southIndian = document.getElementById('south-indian');



    const biryaniData = filterItem(foodItem, 'biryani');
    const chickenData = filterItem(foodItem, 'chicken');
    const paneerData = filterItem(foodItem, 'paneer');
    const vegetableData = filterItem(foodItem, 'vegetable');
    const chineseData = filterItem(foodItem, 'chinese');
    const southIndianData = filterItem(foodItem, 'south indian');

    htmlMap(biryani, biryaniData);
    htmlMap(chicken, chickenData);
    htmlMap(paneer, paneerData);
    htmlMap(vegetable, vegetableData);
    htmlMap(chinese, chineseData);
    htmlMap(southIndian, southIndianData);
}

displayItems();

const categoryListData = [...new Map(foodItem.map(
    item => [item['category'], item])).values()];

// in a more clearer way:
// const map = new Map();
// for (const item of foodItem){
//     map.set(item.category, item);
// }
// const categoryListData = [...map.values()];

// with the reduce function
// const categoryListData = Object.values(
//     foodItem.reduce(
//     (acc, item) => {
//         acc[item.category] = item;
//         return acc;
//     }, {})
// );

// console.log(categoryListData);

function cetegoryLists() {
    const categoryList = document.getElementById('category-list');

    categoryListData.map(item => {
        const listCard = document.createElement('div');
        listCard.setAttribute('class', 'list-card');

        const img = document.createElement('img');
        img.src = "../" + item.img;

        const listName = document.createElement('a');
        listName.setAttribute('class', 'list-name');
        listName.setAttribute('href', "#" + item.category);
        listName.innerText = item.category;

        listCard.appendChild(img);
        listCard.appendChild(listName);

        const cloneListCard = listCard.cloneNode(true);

        categoryList.appendChild(cloneListCard);
    })
}


cetegoryLists();

document.querySelectorAll('.add-to-cart').forEach(item =>{
    item.addEventListener('click', addToCart);
})

let cartData = [];

function addToCart(){
    // console.log(this.parentNode.nextSibling.nextSibling);  
    // get its own html text
    const itemToAdd = this.parentNode.nextSibling.nextSibling.innerText;
    const itemObj = foodItem.find(element => element.name === itemToAdd);
     console.log(itemObj);
    const index = cartData.indexOf(itemObj);
    if (index === -1){
        document.getElementById(itemObj.id).classList.add('toggle-heart');
    }

}