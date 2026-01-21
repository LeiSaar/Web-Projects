const swiper = new Swiper('.mySwiper', {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '#next',
    prevEl: '#prev',
  },
  // Adding a default slice per view helps visibility
  slidesPerView: 1,
});

const cartIcon = document.querySelector('.cart-icon');
const cartTab = document.querySelector('.cart-tab');
const cartTotal = document.querySelector('.cart-total');
const closeBtn = document.querySelector('.close-btn');
const cardList = document.querySelector('.card-list');
const cartList = document.querySelector('.cart-list');
const cartValue = document.querySelector('.cart-value');
const hamburger = document.querySelector('.hamburg');
const mobileMenu = document.querySelector('.mobile-menu');
const bars = document.querySelector('.fa-bars');


cartIcon.addEventListener("click", () => cartTab.classList.add('cart-tab-active'));
closeBtn.addEventListener("click", () => cartTab.classList.remove('cart-tab-active'));
hamburger.addEventListener("click", ()=> mobileMenu.classList.toggle('mobile-menu-active'));
hamburger.addEventListener("click", ()=>{
  bars.classList.toggle('fa-bars');
  bars.classList.toggle('fa-xmark');});

let productList = [];
let cartProduct = [];

const updateTotals = ()=>{
  let totalPrice = 0;
  let totalItems = 0;

  document.querySelectorAll('.item').forEach(item =>{
    const price = parseFloat(item.querySelector('.item-total').textContent.replace('$', ''));
    const quantity = parseFloat(item.querySelector('.quantity-value').textContent);
    totalPrice += price;
    totalItems += quantity;
  });

  cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
  cartValue.textContent = `${totalItems}`;
}

const showCards = () => {
  productList.forEach(product => {
    const orderCard = document.createElement('div');
    orderCard.classList.add('order-card');
    orderCard.innerHTML =
      `<div class="card-image">
              <img src="${product.image}" alt="">
            </div>
            <h4>${product.name}</h4>
            <h4 class="price">${product.price}</h4>
            <a href="#" class = "btn card-btn"> Add to Cart</a>`;
    cardList.appendChild(orderCard);
    
    const cardBtn = orderCard.querySelector('.card-btn');
    cardBtn.addEventListener('click', (e) => {
      e.preventDefault();
      addToCart(product);
    })
  })
}

const addToCart = (product) => {
  let quantity = 1;
  let price = parseFloat(product.price.replace('$', ''));

  const existingProduct = cartProduct.find(item => item.id === product.id);
  if (existingProduct) {
    alert('Item already in your cart!');
    return;
  }
  cartProduct.push(product);

  const cartItem = document.createElement('div');
  cartItem.classList.add('item');
  cartItem.innerHTML = `
          <div class="item-image">
              <img src="${product.image}">
           </div>
          <div class= "item-detail text-center">
              <h4>${product.name}</h4>
              <h4 class="item-total">${product.price}</h4>
          </div>
          <div class="flex">
              <a href="#" class="quantity-btn minus">
                  <i class="fa-solid fa-minus"></i>
              </a>

              <h4 class="quantity-value">${quantity}</h4>

              <a href="#" class="quantity-btn plus">
                  <i class="fa-solid fa-plus"></i>
              </a>
          </div>`

  cartList.appendChild(cartItem);
  updateTotals();

  const quantityValue = cartItem.querySelector(".quantity-value");

  const itemTotal = cartItem.querySelector('.item-total');
  const plusBtn = cartItem.querySelector(".plus");
  const minusBtn = cartItem.querySelector(".minus");

  plusBtn.addEventListener("click", (e) => {
    e.preventDefault();
    quantity += 1;
    quantityValue.textContent = quantity;
    itemTotal.textContent = `$${(price * quantity).toFixed(2)}`;
    updateTotals();
  });

  minusBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (quantity > 1) {
      quantity -= 1;
      quantityValue.textContent = quantity;
      itemTotal.textContent = `$${(price * quantity).toFixed(2)}`;
      updateTotals();
    } else {
      cartItem.classList.add('slide-out');
      setTimeout(
        () => {
          cartItem.remove();
          cartProduct = cartProduct.filter(item => item.id !== product.id);
          updateTotals();
        }, 300);
    }
  });

}

// const initApp = () =>{
//       fetch('../json/products.json').then(
//         response => response.json()).then(
//           data =>{
//             productList = data;
//           }
//         )
// }
const initApp = async () => {
  try {
    const response = await fetch("../json/products.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    productList = data;
    showCards();
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
}

initApp();


