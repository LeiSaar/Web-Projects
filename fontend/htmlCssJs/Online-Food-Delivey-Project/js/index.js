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

let cartData = [];

function addToCart() {
    const itemToAdd = this.parentNode.nextSibling.nextSibling.innerText;
    const itemObj = foodItem.find(element => element.name === itemToAdd);
    
    // Initialize quantity if it doesn't exist
    if (!itemObj.quantity) {
        itemObj.quantity = 1;
    }
    
    const index = cartData.indexOf(itemObj);
    if (index === -1) {
        document.getElementById(itemObj.id).classList.add('toggle-heart');
        cartData = [...cartData, itemObj];
    } else if (index > -1) {
        alert("Are you sure you want to add the same food again?")
    }

    document.getElementById('cart-plus').innerText = " " + cartData.length + ' Items';
    document.getElementById('m-cart-plus').innerText = " " + cartData.length;

    totalAmount();
    cartItems();
}

function cartItems() {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = "";

    cartData.map(item => {
        const tableRow = document.createElement('tr');

        const rowData1 = document.createElement('td');
        const img = document.createElement('img');
        img.src = "../" + item.img;
        rowData1.appendChild(img);

        const rowData2 = document.createElement('td');
        rowData2.innerText = item.name;

        const rowData3 = document.createElement('td');
        const btn1 = document.createElement('button');
        btn1.setAttribute('class', 'decrease-item');
        btn1.innerText = '-';
        const span = document.createElement('span');
        span.innerText = item.quantity;
        const btn2 = document.createElement('button');
        btn2.setAttribute('class', 'increase-item');
        btn2.innerText = '+';

        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);

        const rowData4 = document.createElement('td');
        rowData4.innerText = item.price;

        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);

        tableBody.appendChild(tableRow);
    })
}

function totalAmount() {
    let sum = 0;
    cartData.map(item => {
        sum += (item.price * item.quantity);
    })

    document.getElementById('total-item').innerText = 'Total Item: ' + cartData.length;
    document.getElementById('total-price').innerText = 'Total Price: $ ' + sum;
    document.getElementById('m-total-amount').innerText = 'Total Amount: $ ' + sum;
}

function cartToggle() {
    if (cartData.length > 0) {
        document.getElementById('food-items').classList.toggle('food-items');
        document.getElementById('category-list').classList.toggle('food-items');
        document.getElementById('cart-page').classList.toggle('cart-toggle');
        document.getElementById('checkout').classList.toggle('cart-toggle');
        document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle');
        document.getElementById('category-header').classList.toggle('toggle-category');
        flag = true;
    } else {
        alert("Currently no items in cart!")
    }
}

let flag = false;

function increaseItem() {
    let itemToInc = this.parentNode.previousSibling.innerText;
    console.log("increase Item", itemToInc);

    const incObj = cartData.find(element => element.name === itemToInc);
    incObj.quantity += 1;

    totalAmount();
    cartItems();
}

function decreaseItem() {
    let itemToDec = this.parentNode.previousSibling.innerText;
    let decObj = cartData.find(element => element.name === itemToDec);
    let ind = cartData.indexOf(decObj);
    if (decObj.quantity > 1) {
        decObj.quantity -= 1;
    } else {
        document.getElementById(decObj.id).classList.remove('toggle-heart');
        cartData.splice(ind, 1);
        document.getElementById('cart-plus').innerHTML = ' ' + cartData.length + ' Items';
        document.getElementById('m-cart-plus').innerText = ' ' + cartData.length;
        if (cartData.length < 1 && flag) {
            document.getElementById('category-list').classList.toggle('food-items');
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            document.getElementById('checkout').classList.toggle('cart-toggle');
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle');
            document.getElementById('category-header').classList.toggle('toggle-category');
            flag = false;
            alert('Currently no item in cart');
        }
    }

    totalAmount();
    cartItems();
}

// Event Delegation for all buttons - THIS IS THE KEY FIX
document.addEventListener('click', function(e) {
    // Add to cart buttons
    if (e.target.classList.contains('add-to-cart')) {
        addToCart.call(e.target);
    }
    // Increase/Decrease buttons in cart
    else if (e.target.classList.contains('increase-item')) {
        increaseItem.call(e.target);
    }
    else if (e.target.classList.contains('decrease-item')) {
        decreaseItem.call(e.target);
    }
});

// Event listeners for cart toggle
document.getElementById('cart-plus').addEventListener('click', cartToggle);
document.getElementById('m-cart-plus').addEventListener('click', cartToggle);

function addAddress() {
    let address = prompt('Enter your address');
    if (address) {
        document.getElementById('add-address').innerText = " " + address;
        document.getElementById('m-add-address').innerText = " " + address;
    } else {
        alert("Please add your address!");
    }
}

document.getElementById('add-address').addEventListener('click', addAddress);
document.getElementById('m-add-address').addEventListener('click', addAddress);

// Fixed window.onresize function
window.onresize = window.onload = function(){
    const size = window.innerWidth; // Use innerWidth instead of screen.width
    console.log(size);
    
    if (size < 800){
        // Check if elements exist before trying to manipulate them
        const foodItems = document.getElementById('food-items');
        const cartPage = document.getElementById('cart-page');
        const categoryHeader = document.getElementById('category-header');
        
        if (foodItems && cartPage && categoryHeader) {
            const cloneFoodItems = foodItems.cloneNode(true);
            const cloneCartPage = cartPage.cloneNode(true);
            
            foodItems.remove();
            cartPage.remove();
            
            categoryHeader.after(cloneFoodItems);
            document.getElementById('food-items').after(cloneCartPage);
        }
    }
    
    if (size > 800){
        const foodItems = document.getElementById('food-items');
        const cartPage = document.getElementById('cart-page');
        const header = document.getElementById('header');
        
        if (foodItems && cartPage && header) {
            const cloneFoodItems = foodItems.cloneNode(true);
            const cloneCartPage = cartPage.cloneNode(true);
            
            foodItems.remove();
            cartPage.remove();
            
            header.after(cloneFoodItems);
            document.getElementById('food-items').after(cloneCartPage);
        }
    }
}