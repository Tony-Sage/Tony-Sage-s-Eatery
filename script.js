// create menu items
const menuData = [
  {
    name: "Jollof Rice & Chicken",
    description: "Spicy jollof rice served with grilled chicken.",
    price: "₦2500",
    image: "images/jollof.jpeg",
    category: "Rice"
  },
  {
    name: "Egusi & Fufu",
    description: "Rich egusi soup served with soft fufu.",
    price: "₦3000",
    image: "images/egusi.jpeg",
    category: "Soups"
  },
  {
    name: "Puff Puff",
    description: "Soft, fluffy, and sweet deep-fried dough balls.",
    price: "₦500",
    image: "images/puffpuff.jpeg",
    category: "Snacks"
  },
  {
    name: "Palm Wine",
    description: "Traditional natural palm sap drink.",
    price: "₦1500",
    image: "images/palmwine.jpeg",
    category: "Drinks"
  },
  {
    name: "Ofada Rice & Ayamase",
    description: "Local ofada rice served with green pepper sauce.",
    price: "₦3500",
    image: "images/ofada.jpeg",
    category: "Rice"
  },
  {
    name: "Moi Moi",
    description: "Steamed bean pudding wrapped in leaves.",
    price: "₦1500",
    image: "images/moimoi.jpeg",
    category: "Others"
  },
  {
    name: "Ogbono & Pounded Yam",
    description: "Draw soup made with ogbono seeds served with pounded yam.",
    price: "₦3100",
    image: "images/ogbono.jpeg",
    category: "Soups"
  },
  {
    name: "Fresh Orange Juice",
    description: "Freshly squeezed orange juice.",
    price: "₦1000",
    image: "images/orangejuice.jpeg",
    category: "Drinks"
  },
  {
    name: "Chin Chin",
    description: "Crispy, sweet, deep-fried dough cubes.",
    price: "₦400",
    image: "images/chinchin.jpeg",
    category: "Snacks"
  },
  {
    name: "White Rice & Stew",
    description: "Steamed white rice served with spicy tomato stew.",
    price: "₦2000",
    image: "images/whiterice_stew.jpeg",
    category: "Rice"
  },
  {
    name: "Okra Soup & Garri",
    description: "Fresh okra soup with assorted meats served with garri.",
    price: "₦2800",
    image: "images/okra.jpeg",
    category: "Soups"
  },
  {
    name: "Suya",
    description: "Spicy grilled beef skewers with pepper mix.",
    price: "₦2000",
    image: "images/suya.jpeg",
    category: "Others"
  },
  {
    name: "Bottled Water",
    description: "Refreshing clean drinking water.",
    price: "₦300",
    image: "images/water.jpeg",
    category: "Drinks"
  },
  {
    name: "Spring Rolls",
    description: "Crispy fried rolls filled with vegetables.",
    price: "₦1000",
    image: "images/springrolls.jpeg",
    category: "Snacks"
  },
  {
    name: "Yam Porridge",
    description: "Soft yam chunks cooked in rich palm oil sauce.",
    price: "₦2500",
    image: "images/yamporridge.jpeg",
    category: "Others"
  },
  {
    name: "Fried Rice & Turkey",
    description: "Delicious fried rice with succulent turkey.",
    price: "₦3000",
    image: "images/friedrice_turkey.jpeg",
    category: "Rice"
  },
  {
    name: "Efo Riro & Amala",
    description: "Spinach stew with assorted meats served with amala.",
    price: "₦3200",
    image: "images/efo.jpeg",
    category: "Soups"
  },
  {
    name: "Chapman",
    description: "Refreshing Nigerian cocktail with a fruity twist.",
    price: "₦1200",
    image: "images/chapman.jpeg",
    category: "Drinks"
  },
  /*
  {
    name: "Meat Pie",
    description: "Flaky pastry stuffed with minced meat and vegetables.",
    price: "₦800",
    image: "images/meatpie.jpeg",
    category: "Snacks"
  },
  {
    name: "Shawarma",
    description: "Grilled chicken wrapped with veggies in pita bread.",
    price: "₦2500",
    image: "images/shawarma.jpeg",
    category: "Others"
  },
  {
    name: "Banga Soup & Starch",
    description: "Palm nut soup served with starch.",
    price: "₦3500",
    image: "images/banga.jpeg",
    category: "Soups"
  },
  {
    name: "Fried Plantain & Beans",
    description: "Sweet plantains with peppered beans porridge.",
    price: "₦2000",
    image: "images/beans.jpeg",
    category: "Others"
  },
  {
    name: "Zobo Drink",
    description: "Chilled hibiscus drink with pineapple flavor.",
    price: "₦700",
    image: "images/zobo.jpeg",
    category: "Drinks"
  },
  {
    name: "Gala Sausage Roll",
    description: "Baked snack roll filled with spiced sausage.",
    price: "₦500",
    image: "images/gala.jpeg",
    category: "Snacks"
  },
  {
    name: "Coconut Rice",
    description: "Fragrant rice cooked in creamy coconut milk.",
    price: "₦2800",
    image: "images/coconutrice.jpeg",
    category: "Rice"
  }
  */
];

// sets the cart count to the number of items in the cartData array
let cartCount;
updateCartCount();
function updateCartCount(){
 if (JSON.parse(localStorage.getItem("cartData")) === null){
 cartCount = 0
} else {
 cartCount = JSON.parse(localStorage.getItem("cartData")).length
}
document.getElementById("cart-count").innerText = cartCount;
}

// assigns the the HTML element, #menu, to a variable, menu, to be used later 
const menu = document.getElementById("menu");

// displays menu on page load
renderMenu(menuData)

// gets and displays cart items from local storage. Creates a new array for cart items if local storage is empty
const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
renderCart();
calculateCartTotal();

// creates new cart item object in the cart item array
let cartItem
function updateCart(index){
 selectedDishIndex = parseInt(index)
 selectedDish = menuData[selectedDishIndex]
 const servings = prompt(`How many servings of ${selectedDish.name} are you ordering?`)
 const dishQuantity = parseInt(servings)
 if (isNaN(dishQuantity)){
  alert('Please enter a valid number. Alphabets, symbols and emojis are not allowed')
 } else {
  cartItem = {
   image: selectedDish.image,
   name: selectedDish.name,
   price: selectedDish.price,
   quantity: dishQuantity,
   tag: index
  }
  
  let exists = false;
  for (let i = 0; i < cartData.length; i++) {
    if (cartData[i].tag === cartItem.tag) {
      exists = true;
      break;
    }
  }

  if (exists) {
    alert("Dish is already in cart! Increase the number of servings from the cart please");
  } else {
    cartData.push(cartItem);
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }
 }
}


// displays the cart item objects in the cart array, cartData, on the HTML element, cart-list
function renderCart(){
 document.querySelector('#cart-list').innerHTML = ""; 
 let itemTotal
 cartData.forEach((value, index) => {
  const quantity = value.quantity
  const price = parseInt(value.price.replace(/[^\d]/g, ""))
  itemTotal = quantity * price
  cartItemDiv = document.createElement("div")
  cartItemDiv.className = "cart-item"
  cartItemDiv.innerHTML = `
  <div class="dish-quantity">
   <div class="cart-thumbnail">
    <img src="${value.image}">
    <p>${value.name}</p>
    <p>${value.price}</p>
    <button class="quantity-control plusButton" data-index = ${index}>➕</button>
    <button class="quantity-control minusButton" data-index = ${index}>➖</button>
   </div>
  <p>×${value.quantity}</p>
 </div>
 <p>${itemTotal}</p>
 `
 document.querySelector("#cart-list").appendChild(cartItemDiv) 
 })
 document.querySelectorAll('.plusButton').forEach(button => {
  button.addEventListener("click", addToServings)
 })
 document.querySelectorAll('.minusButton').forEach(button => {
  button.addEventListener("click", takeFromServings)
 })
}


// calculates the total price of ordered dishes
function calculateCartTotal(itemTotal){
 const cartItemPrices = []
 for(i = 0; i < cartData.length; i++){
  itemPrice = cartData[i].price;
  const price = parseInt(itemPrice.replace(/[^\d]/g, ""))
  itemTotal = cartData[i].quantity * price
  cartItemPrices.push(itemTotal)
 }
 
 let cartTotal = 0;
 for(i = 0; i < cartItemPrices.length; i++){
 cartTotal += cartItemPrices[i] 
 }
 document.querySelector("#cart-total-top").innerHTML = `Total: ${cartTotal}`
 document.querySelector("#cart-total").innerHTML = `${cartTotal}`
}

//displays the cart section when the cart icon is clicked
document.querySelector(".cart").addEventListener("click", function (){
 document.querySelector("#cart-section").style.display = "flex";
 document.querySelector("#menu-return-button").style.display = "block";
 document.querySelector("#menu").style.display = "none";
 document.querySelector(".categories").style.display = "none";
 document.querySelector(".search-filter").style.display = "none";
 document.querySelector(".cart").style.display = "none";
});

// returns to the menu page when the return to menu button is clicked
document.querySelector("#menu-return-button").addEventListener("click", function(){
 document.querySelector("#cart-section").style.display = "none";
 document.querySelector("#menu-return-button").style.display = "none";
 document.querySelector("#menu").style.display = "grid";
 document.querySelector(".categories").style.display = "block";
 document.querySelector(".search-filter").style.display = "block";
 document.querySelector(".cart").style.display = "block";
})

// clears cart when either submit or place order button is clicked
let successMessageTimer;
document.querySelectorAll('.cart-btn').forEach(
 cartButton => {
  cartButton.addEventListener("click", () => {
   localStorage.clear();
   cartData.length = 0;
   //code for submit button
   if (cartButton.innerText == "Submit Order"){
    i = 10;
    successMessageTimer = setInterval(() => {
     if (i > 0){
      document.querySelector("#success-message").style.display = "block"
      document.querySelector('#success-message').innerHTML = `Your order have been submitted. <br> Print receipt before it clears in <span class='timer'>${i}</span> seconds`
      i--
     } else {
      clearInterval(successMessageTimer)
     }
    }, 1000)
    setTimeout(() => {
     document.querySelector("#success-message").style.display = "none"
    }, 11000)
    setTimeout(() => {
     clearCartTotalAndCount()
     renderCart();
    }, 11000)
    setTimeout(() => {
     document.querySelector('#success-message').innerText = ""
    }, 11000)
   } 
   // code for print button
   else 
   {
    clearInterval(successMessageTimer)
    confirmOrder = confirm("Place order and print receipt?")
    if (confirmOrder){
     document.querySelector('#success-message').innerHTML = "Your order has been submitted and your receipt will be printed"
     document.querySelector('#success-message').style.display = "block"
     setTimeout(() => {
      document.querySelector('#success-message').style.display = "none"
      document.querySelector('#success-message').innerText = ""
     }, 2000)
     window.print();
     setTimeout(() => {
      clearCartTotalAndCount();
      renderCart();
     }, 6000)
    }
   }
  })
 }
)

// increases the number of servings when add button is clicked
function addToServings(){
 number = event.target.dataset.index
 cartData[number].quantity += 1;
 cartItem = cartData[number]
 calculateCartTotal()
 renderCart()
 updateCartData()
}

// reduces the number of servings when minus button is clicked
function takeFromServings(){
 number = event.target.dataset.index
 if (cartData[number].quantity < 2){
  cartData.splice(number, 1)
  document.getElementById("cart-count").innerText -= 1;
 } else {
  cartData[number].quantity -= 1;
 }
 calculateCartTotal()
 renderCart()
 updateCartData()
}

function updateCartData(){
 localStorage.removeItem("cartData")
 localStorage.setItem("cartData", JSON.stringify(cartData));
}

function clearCartTotalAndCount(){
 document.getElementById("cart-count").innerText = 0;
 document.getElementById("cart-total-top").innerHTML= "Total: 0";
 document.getElementById("cart-total").innerHTML = 0;
}

// applies filter when filter buttons are clicked
function applyFilter(category){
 if (category != "All"){
  //document.querySelector('#menu').innerHTML = ""
  filteredMenu = menuData.filter(function(dish){
  return dish.category === category
  })
  renderMenu(filteredMenu)
 } else {
  document.querySelector('#menu').innerHTML = ""
  renderMenu(menuData)
 }
}

// renders menu by looping through each dish object of the array passed as argument 
function renderMenu(filteredMenu){
 document.querySelector('#menu').innerHTML = ""
 filteredMenu.forEach((dish, index) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
   <img src="${dish.image}" alt="${dish.name}" />
   <div class="card-body">
   <h3>${dish.name}</h3>
   <p>${dish.description}</p>
   </div>
    <div class="card-footer">
    <span class="price">${dish.price}</span>
    <button class="add-btn" data-index="${index}">Add ➕</button>
   </div>`;
 
  card.querySelector(".add-btn").addEventListener("click", () => {
   updateCart(index);
   updateCartCount();
   renderCart();
   calculateCartTotal();
  
   document.getElementById("cart-count").innerText = cartCount;
  });

  menu.appendChild(card);
 });
}

// attaching event listeners to the filter buttons
let filterButtons = document.querySelectorAll(".menu-filter")
filterButtons.forEach((button) => {
 button.addEventListener("click",()=>{
  category = button.innerText
  applyFilter(category)
  showActiveFilter(category)
 })
})

// change the class of filter buttons to show active one
function showActiveFilter(category){
 filterButtons.forEach((button) => {
  button.style.background = "#eee"
  button.style.color = "black"
  if (button.innerText === category){
   button.style.background = "#ff6b35"
   button.style.color = "#eee"
  }
 })
}

// event listener for search bar
document.getElementById("search-input").addEventListener("input", (e) => {
  searchMenu(e.target.value);
});

// search function for search bar
function searchMenu(searchTerm) {
  const results = menuData.filter(dish =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dish.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
    dish.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  renderMenu(results);
  console.log("Hey")
}