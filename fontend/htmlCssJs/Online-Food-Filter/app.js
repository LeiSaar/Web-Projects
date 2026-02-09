const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: "Fluffy, golden-brown stacks served with a dollop of whipped butter and premium maple syrup.",
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: "A classic two-patty knockout topped with melted cheddar, crisp lettuce, and our signature diner sauce.",
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: "A monstrous blend of rich chocolate and premium vanilla, topped with whipped cream and a literal mountain of treats.",
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: "A rustic farm-style feast featuring farm-fresh eggs, artisanal toast, and seasoned home fries.",
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: "The ultimate protein punch: a juicy burger topped with a perfectly runny sunny-side-up egg and melted cheese.",
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: "A thick, creamy masterpiece blended with crunchy Oreo crumbles and drizzled in decadent chocolate fudge.",
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: "For the true bacon lover—crispy, thick-cut strips piled high on a toasted buttery brioche bun.",
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: "The nostalgic taste of home: a perfectly grilled cheeseburger served with golden fries and a crisp pickle.",
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: "The perfect comfort companion—a silky smooth shake designed to satisfy your deepest sweet cravings.",
    },
    {
        id: 10,
        title: "bison steak",
        category: "dinner",
        price: 22.99,
        img: "./images/item-10.jpeg",
        desc: "Lean, tender, and flavor-packed bison steak seared to perfection and served with seasonal roasted greens.",
    },
]

const btnContainer = document.querySelector('.btn-container');
const sectionCenter = document.querySelector('.section-center');

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((menuItem) => {
        return `<article class="menu-item">
                    <img src=${menuItem.img} alt="${menuItem.title}" class="photo">
                    <div class="item-info">
                        <header>
                            <h4>${menuItem.title}</h4>
                            <h4 class = "price">$${menuItem.price}</h4>
                        </header>
                        <p class="item-text">
                            ${menuItem.desc}
                        </p>
                    </div>
            </article>`
    })

    displayMenu = displayMenu.join("");

    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(
        (values, item) => {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        }, 
       ["all"]
    );
   
    const categoryBtns = categories.map(
        (category)=>{
            return `<button type="button" class = "filter-btn" data-id = "${category}">${category}</button>`
        }
    ).join("");

    btnContainer.innerHTML = categoryBtns;

    const filterBtns = btnContainer.querySelectorAll(".filter-btn");

    filterBtns.forEach((btn)=>{
        btn.addEventListener("click", (e)=>{
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter((menuItem)=>{
                if (menuItem.category  === category){
                      return menuItem;
                }
            });

            if(category === "all"){
                displayMenuItems(menu);
            } else{
                displayMenuItems(menuCategory);
            }
        })
    })
}

// display all items when pages loads
window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu);
    displayMenuButtons();
})