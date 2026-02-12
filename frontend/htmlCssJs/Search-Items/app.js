const productItems = [
    {
        id: 1,
        name: "Tshirt For Everyone",
        img: "images/t1.jpg",
        price: 25
    },
    {
        id: 2,
        name: "Gildan Men's Crew TShirts",
        img: "images/t2.jpg",
        price: 25
    },
    {
        id: 3,
        name: "Tranya TShirt",
        img: "images/t3.jpg",
        price: 25
    },
    {
        id: 4,
        name: "Adidas Roma Bag",
        img: "images/b1.jpg",
        price: 25
    },
    {
        id: 5,
        name: "Levi's Bag For Roadtrip",
        img: "images/b2.jpg",
        price: 25
    },
    {
        id: 6,
        name: "Adidas Fashinable Bag",
        img: "images/b3.jpg",
        price: 25
    },
    {
        id: 7,
        name: "Hoodie Fashion",
        img: "images/h3.jpg",
        price: 25
    },
    {
        id: 8,
        name: "Nike Sneaker",
        img: "images/s1.jpg",
        price: 25
    },
    {
        id: 9,
        name: "Nike Grand Court Sneaker",
        img: "images/s2.jpg",
        price: 25
    },
    {
        id: 10,
        name: "Adidas Grand Court Sneaker",
        img: "images/s3.jpg",
        price: 25
    },
    {
        id: 11,
        name: "Hoodie For Everyone",
        img: "images/h1.jpg",
        price: 25
    },
    {
        id: 12,
        name: "Fenta Fashion Hoodie",
        img: "images/h2.jpg",
        price: 25
    },
    {
        id: 13,
        name: "Tranya Smart Watch",
        img: "images/w1.jpg",
        price: 25
    },
    {
        id: 14,
        name: "Tranya Smart Watch",
        img: "images/w2.jpg",
        price: 25
    },
]



const productlist = document.getElementById("product-list");

const displayProducts = (products) => {
    let productsInfo = products.map((pd) => {
        return `<div class="product">
                    <img src=${pd.img} alt="">
                    <div class="p-details">
                        <h2 class = "productName">${pd.name}</h2>
                        <h3>$${pd.price}</h3>
                    </div>
            </div>`;
    });

    productsInfo = productsInfo.join("");

    productlist.innerHTML = productsInfo;
}


const search = () => {

    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const productnames = productlist.getElementsByTagName("h2");
    const products = document.querySelectorAll(".product");

    for (let i = 0; i < productnames.length; i++) {
        let match = products[i].getElementsByTagName("h2")[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML;

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                products[i].style.display = "";
            } else {
                products[i].style.display = "none";
            }
        }
    }
}


const searchProducts = () => {

    const searchQuery = document.getElementById("search-item").value.toUpperCase();
    let matchedProducts = [];
    productItems.forEach((item) => {
        if (item.name.toLocaleUpperCase().includes(searchQuery)){
            matchedProducts.push(item);
        }
    })

    if(matchedProducts.length > 0){
        displayProducts(matchedProducts);
    } else{
        productlist.innerHTML = "<div class = 'no-match'> No Matched Item Found! Please try other queries:) </div>";
    }
}

window.addEventListener("DOMContentLoaded", () => {
    displayProducts(productItems);
});




