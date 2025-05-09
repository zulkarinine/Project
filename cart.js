let cartSystem = [];
let id = 0;

function addItem (name, price) {
    cartSystem.push ({id:id++, name, price, quantity:1});
    return cartSystem;
   }

function increaseQuantity (id, quantity) {
    if (quantity <= 0) {
        return "quantity must be greater than 0";
    }
    const findItem = cartSystem.find (item => item.id === id);
    if (findItem) {
        findItem.quantity += quantity;
        return findItem;
    }else {
        return "item not in the cart";
    }
    }

function reduceQuantity (id, quantity) {
    if (quantity <= 0) {
        return "quantity must be greater than 0";
    }
    const findItem = cartSystem.find (item => item.id === id);
    if (findItem) {
        findItem.quantity -=  quantity;
        if (findItem.quantity < 1) {
            findItem.quantity = 1;
    }return findItem;
    }else {
        return "item not selected";
    }
}

function removeItem (id) {
    const remItem = cartSystem.filter (item => item.id !== id);
      cartSystem = remItem;
      return cartSystem;
    }

function checkItem (id) {
    const findItem = cartSystem.filter (item => item.id === id);
    if (findItem.length > 0) {
        return "Item is in the cart";
    }else {
        return "Item is not in the cart";
    }
}

function clearCart () {
    cartSystem.length = 0;
   return cartSystem;
}
console.log(addItem ("Shirt",3000));
console.log(addItem ("Apple",700));
console.log(addItem ("Book",1200));
console.log(addItem ("Pen",120));
console.log(addItem ("Bread",1700));
console.log(increaseQuantity (1,0));
console.log(increaseQuantity (0,3));
console.log(increaseQuantity (3,3));
console.log(reduceQuantity (0,1));
console.log(removeItem (4));
console.log(checkItem (9));
console.log(clearCart ());
console.log (cartSystem);
