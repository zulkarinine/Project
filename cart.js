let cart = [];
let id = 0;
const shop = [
    { id: 0, name: "Shirt", price: 3000 },    
    { id: 1, name: "Apple", price: 700 },      
    { id: 2, name: "Book", price: 1500 },      
    { id: 3, name: "Pen", price: 120 },      
    { id: 4, name: "Bread", price: 1700 }
];

function addItemToCart(id) {
    const findItemFromShop = shop.find(item => item.id === id);
    if(!findItemFromShop) {
        return "item not available";
    }

    const checkItemInCart = cart.find(item => item.id === id);
    if(checkItemInCart) {
        return "item already in cart";
    }
    if(findItemFromShop) {
        const addItem = { ...findItemFromShop, quantity:1 }
        cart.push(addItem);
        return cart;

}
}

function increaseCartQuantity(id, quantity) {
    if(quantity <= 0) {
        return "quantity must be greater than 0";
    }

    const findItem = cart.find(item => item.id === id);
    if(findItem) {
        findItem.quantity += quantity;
        return findItem;
    } else {
        return "Item is not added to cart";
    }
}

function reduceCartQuantity(id, quantity) {
    if(quantity <= 0) {
        return "quantity must be greater than 0";
    }

    const findItem = cart.find(item => item.id === id);
    if(findItem) {
        findItem.quantity -=  quantity;
        if(findItem.quantity < 1) {
            findItem.quantity = 1;
        } 
        return findItem;
    } else {
        return "item not selected";
    }
}

function removeItemFromCart(id) {
    const remItem = cart.filter(item => item.id !== id);
    cart = remItem;
    return cart;
}

function checkItemInCart(id) {
    const findItem = cart.filter(item => item.id === id);
    if(findItem.length > 0) {
        return "Item is in the cart";
    } else {
        return "Item is not in the cart";
    }
}

function clearCart() {
    cart.length = 0;
    return cart;
}


console.log(addItemToCart(0))
console.log(addItemToCart(1))
console.log(addItemToCart(2))
console.log(increaseCartQuantity(2,2))
console.log(reduceCartQuantity(2,1))
console.log(removeItemFromCart(2))
console.log(checkItemInCart(0))
console.log(clearCart())


console.log(cart);
console.log(shop)
