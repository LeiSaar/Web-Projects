 let products = {
            data: [
                {
                    productName: "Regular White T-Shirt",
                    category: "Topwear",
                    price: "30",
                    image: "images/white-tshirt.jpg",
                },
                {
                    productName: "Beige Short Skirt",
                    category: "Bottomwear",
                    price: "49",
                    image: "images/short-skirt.jpg",
                },
                {
                    productName: "Sporty SmartWatch",
                    category: "Watch",
                    price: "99",
                    image: "images/sporty-smartwatch.jpg",
                },
                {
                    productName: "Basic Knitted Top",
                    category: "Topwear",
                    price: "29",
                    image: "images/knitted-top.jpg",
                },
                {
                    productName: "Black Leather Jacket",
                    category: "Jacket",
                    price: "129",
                    image: "images/black-leather-jacket.jpg",
                },
                {
                    productName: "Stylish Pink Trousers",
                    category: "Bottomwear",
                    price: "89",
                    image: "images/pink-trousers.jpg",
                },
                {
                    productName: "Brown Men's Jacket",
                    category: "Jacket",
                    price: "189",
                    image: "images/brown-jacket.jpg",
                },
                {
                    productName: "Comfy Gray Pants",
                    category: "Bottomwear",
                    price: "49",
                    image: "images/comfy-gray-pants.jpg",
                },
                {
                    productName: "Tshirt For Everyone",
                    image: "images/t1.jpg",
                    price: 25,
                    category: "Topwear"
                },
                {
                    productName: "Gildan Men's Crew TShirts",
                    image: "images/t2.jpg",
                    price: 23,
                    category: "Topwear"
                },
                {
                    productName: "Tranya TShirt",
                    image: "images/t3.jpg",
                    price: 28,
                    category: "Topwear"
                },
                {
                    productName: "Adidas Roma Bag",
                    image: "images/b1.jpg",
                    price: 30,
                    category: "Other"
                },
                {
                    productName: "Levi's Bag For Roadtrip",
                    image: "images/b2.jpg",
                    price: 35,
                    category: "Other"
                },
                {
                    productName: "Adidas Fashinable Bag",
                    image: "images/b3.jpg",
                    price: 33,
                    category: "Other"
                },
                {
                    productName: "Hoodie Fashion",
                    image: "images/h3.jpg",
                    price: 26,
                    category: "Other"
                },
                {
                    productName: "Nike Sneaker",
                    image: "images/s1.jpg",
                    price: 68,
                    category: "Shoe"
                },
                {
                    productName: "Nike Grand Court Sneaker",
                    image: "images/s2.jpg",
                    price: 95,
                    category: "Shoe"
                },
                {
                    productName: "Adidas Grand Court Sneaker",
                    image: "images/s3.jpg",
                    price: 78,
                    category: "Shoe"
                },
                {
                    productName: "Hoodie For Everyone",
                    image: "images/h1.jpg",
                    price: 125,
                    category: "Jacket"
                },
                {
                    productName: "Fenta Fashion Hoodie",
                    image: "images/h2.jpg",
                    price: 130,
                    category: "Jacket"
                },
                {
                    productName: "Citizen Classic Watch",
                    image: "images/w1.jpg",
                    price: 125,
                    category: "Watch"
                },
                {
                    productName: "Citizen Elegant Watch",
                    image: "images/w2.jpg",
                    price: 225,
                    category: "Watch"
                },
            ]
        };

for (let i of products.data){
    //create card 
    let card = document.createElement("div");
    // add classnames to card and card should stay hidden initially
    card.classList.add("card", i.category, "hide")

    // create image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    // create img tag 
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    // add img tag into the imgContainer
    imgContainer.appendChild(image);
    //add imgContainer into the card
    card.appendChild(imgContainer);

    //create  product details
    let productDetails = document.createElement("div");
    productDetails.classList.add("product-details");
    // create product name h2 tag
    let productName = document.createElement("h2");
    productName.classList.add("product-name");
    productName.innerText = i.productName;
    productDetails.appendChild(productName);
    //create p tag for product price
    let productPrice = document.createElement("p");
    productPrice.classList.add("productPrice");
    productPrice.innerText = "$" + i.price;
    productDetails.appendChild(productPrice);

    //add product details into card
    card.appendChild(productDetails);

    //add card to the products
    document.getElementById("products").appendChild(card);
}


// parameter passed from button (parameter same as category)

const filterProduct = (value) =>{
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button)=>{
        // check if value equals innerText
        if (value.toUpperCase() === button.innerText.toUpperCase()){
            button.classList.add("active");
        }else{
            button.classList.remove("active");
        }
    });

    //select all cards, note cards have a class name that is same as category name 
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element)=>{
        if(value === "All"){
            element.classList.remove("hide");
            console.log(value);
        }
        else{
            //check if element contains category class
            if(element.classList.contains(value)){
                //display element based on Category
                element.classList.remove("hide");
            }else{
                element.classList.add("hide");
            }
        }
    });
}

//search button click
document.getElementById("search").addEventListener("click",
    () => {
        let searchInput = document.getElementById("search-input").value;
        let elements = document.querySelectorAll(".product-name");
        let cards = document.querySelectorAll(".card");
        // loop through all elements
        elements.forEach((element, index)=> {
            // check if text includes the search value
            if(element.innerText.toUpperCase().includes(searchInput.toUpperCase())){
                //display matching card
                cards[index].classList.remove("hide");
            }else{
                //hide others
                cards[index].classList.add("hide");
            }
        })
    }
)

// initially display all products
window.onload = () => {
    filterProduct('All');
}

