const numbersDisplay = document.getElementById("numbersDisplay");

const hamburgerQuantityDisplay = document.getElementById("hamburgerQuantityDisplay");
const friesQuantityDisplay = document.getElementById("friesQuantityDisplay");
const friedChickenQuantityDisplay = document.getElementById("friedChickenQuantityDisplay");
const pieQuantityDisplay = document.getElementById("pieQuantityDisplay");
const pizzaQuantityDisplay = document.getElementById("pizzaQuantityDisplay");
const cokeQuantityDisplay = document.getElementById("cokeQuantityDisplay");
const spriteQuantityDisplay = document.getElementById("spriteQuantityDisplay");
const chicharonQuantityDisplay = document.getElementById("chicharonQuantityDisplay");
const spaghettiQuantityDisplay = document.getElementById("spaghettiQuantityDisplay");
const cakeQuantityDisplay = document.getElementById("cakeQuantityDisplay");

let totalPrice = 0;
let totalItems = 0;
let allItemsOutOfStock = false;


const items = [
  {
    name: "Hamburger",
    price: 50,
    quantity: 0,
    quantityDisplay: hamburgerQuantityDisplay,
    quantityLimit: 20,
    limitReached: false,
  },
  
  {
    name: "Fries",
    price: 30,
    quantity: 0,
    quantityDisplay: friesQuantityDisplay,
    quantityLimit: 33,
    limitReached: false,
  },
  
  {
    name: "Fried Chicken",
    price: 40,
    quantity: 0,
    quantityDisplay: friedChickenQuantityDisplay,
    quantityLimit: 25,
    limitReached: false,
  },
  
  {
    name: "Pie",
    price: 60,
    quantity: 0,
    quantityDisplay: pieQuantityDisplay,
    quantityLimit: 16,
    limitReached: false,
  },
  
  {
    name: "Pizza",
    price: 250,
    quantity: 0,
    quantityDisplay: pizzaQuantityDisplay,
    quantityLimit: 4,
    limitReached: false,
  },
  
  {
    name: "Coke",
    price: 20,
    quantity: 0,
    quantityDisplay: cokeQuantityDisplay,
    quantityLimit: 50,
    limitReached: false,
  },
  
  {
    name: "Sprite",
    price: 20,
    quantity: 0,
    quantityDisplay: spriteQuantityDisplay,
    quantityLimit: 50,
    limitReached: false,
  },
  
  {
    name: "Chicharon",
    price: 15,
    quantity: 0,
    quantityDisplay: chicharonQuantityDisplay,
    quantityLimit: 66,
    limitReached: false,
  },
  
  {
    name: "Spaghetti",
    price: 60,
    quantity: 0,
    quantityDisplay: spaghettiQuantityDisplay,
    quantityLimit: 16,
    limitReached: false,
  },
  
  {
    name: "Cake",
    price: 150,
    quantity: 0,
    quantityDisplay: cakeQuantityDisplay,
    quantityLimit: 6,
    limitReached: false,
  }
];


function addAllItems() {
  if (allItemsOutOfStock) {
    alert("We ran out of stock for everything.");
    return;
  }
  
  items.forEach(item => {
    // if all items reached their limit
    if (item.quantity >= item.quantityLimit) {
      
      // alert each item that reached its limit
      if (!item.limitReached) {
        alert(`${item.name} ran out of stock! Only ${item.quantityLimit} orders available`);
        // mark so it alerts only once
        item.limitReached = true;
      }
      // only skip the item that reached its quantity limit
      return;
    }

    totalPrice += item.price;
    totalItems++;
    numbersDisplay.textContent = `${totalPrice} PHP • ${totalItems} Items`;

    item.quantity++;
    item.quantityDisplay.textContent = item.quantity;
  });
  
  const allItemsQuantityLimitReached = items.every(item => 
      item.quantity >= item.quantityLimit
  );
  
  // only show final alert if all items already alerted
  const allItemsAlerted = items.every(item => item.limitReached === true);
    
  if (allItemsQuantityLimitReached && 
  allItemsAlerted &&
  !allItemsOutOfStock) {
    allItemsOutOfStock = true;
    alert("All items ran out of stock! Only 286 total orders available");
    }
}


function removeAllItems() {
  items.forEach(item => {
    // stop further removal if all numbers are zero
    if (totalPrice < 1 && totalItems < 1) return;
    if (item.quantity < 1) return;
    
    totalPrice -= item.price;
    totalItems --;
    numbersDisplay.textContent = `${totalPrice} PHP • ${totalItems} Items`;
    
    item.quantity --;
    item.quantityDisplay.textContent = item.quantity;
  });
}


function clearItems() {
  const confirmReset = confirm("Reset all items? Everything will be back to zero");
  
  if (confirmReset) {
    items.forEach(item => {
      totalPrice = 0;
      totalItems = 0;
      numbersDisplay.textContent = `${totalPrice} PHP • ${totalItems} Items`;
    
      allItemsOutOfStock = false;
    
      item.quantity = 0;
      item.quantityDisplay.textContent = item.quantity;
    
      item.limitReached = false;
    });
  }
}


function removeItem(itemIndex) {
  // stop further removal if there's nothing to remove (all zero)
  if (totalPrice < 1 && totalItems < 1) return;
  if (items[itemIndex].quantity < 1) return;
  
  totalPrice -= items[itemIndex].price;
  totalItems --;
  numbersDisplay.textContent = `${totalPrice} PHP • ${totalItems} Items`;
  
  items[itemIndex].quantity --;
  items[itemIndex].quantityDisplay.textContent = items[itemIndex].quantity;
}


function addItem(itemIndex) {
  // alert if an item reached its limit
  if (items[itemIndex].quantity >=
    items[itemIndex].quantityLimit
  ) {
    alert(`${items[itemIndex].name} ran out of stock! Only ${items[itemIndex].quantityLimit} orders available`);
    return;
  }
  
  totalPrice += items[itemIndex].price;
  totalItems ++;
  numbersDisplay.textContent = `${totalPrice} PHP • ${totalItems} Items`;
  
  items[itemIndex].quantity ++;
  
  items[itemIndex].quantityDisplay.textContent = items[itemIndex].quantity;
}