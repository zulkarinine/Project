// let shop=[];
// let cart=[];
// let id=0;

// function addItemToShop(name) {
//    const checkItem = shop.find(item => item.name === name);
//    if(checkItem) {
//       throw new Error (name + " already exist in the shop");
//    } else {
//       shop.push({ id:id++, name, price:0, quantity:0 });
//       return shop;
//    }
// }

// function modifyPrice(id, price) {
//    if(price < 0){
//       throw new Error("price cannot be less than 0");
//    };
//    const findItem = shop.find(item => item.id === id);
//    if(findItem) {
//       findItem.price = price;
//       return findItem;
//    } else {
//       throw new Error("Item not found in shop");
//    };
// }

// function updateShopQuantity(id, quantity) {
//    if(quantity < 0) {
//       throw new Error("quantity can not be less than 0");
//    };
//    const findItem = shop.find(item => item.id === id);
//    if(findItem) {
//       findItem.quantity += quantity;
//       return findItem
//    } else {
//       throw new Error ("Item not found in shop");
//    };
// }

// function addItemToCart(id) {
//    const findItem = shop.find(item => item.id === id);
//    if(findItem) {
//       if(findItem.quantity === 0) {
//          return findItem.name + " is out of stock";
//       }
//    }
//    if(!findItem) {
//       throw new Error ("Item is not available in shop");
//    }
//    const checkItem = cart.find(item => item.id === id);
//    if(checkItem) {
//       throw new Error ("Item already added to the cart");
//    }
//    const addItem = {
//          id: findItem.id,
//          name: findItem.name,
//          price: findItem.price,
//          quantity:1
//    };
//    cart.push(addItem);
//    findItem.quantity -= 1;
//    return cart;
// }

// function increaseCartQuantity(id, quantity) {
//    if(quantity <= 0) {
//       throw new Error ("Quantity cannot be less than 0")
//    };
//    const shopItem = shop.find(item => item.id === id);
//    const findItem = cart.find(item => item.id === id);
//    if(shopItem.quantity < quantity) {
//       throw new Error ("not enough quantity in shop")
//    }
//    if(findItem) {
//       findItem.quantity += quantity;
//       shopItem.quantity -= quantity;
//       return findItem;
//    };
// }

// function reduceCartQuantity(id, quantity) {
//    if(quantity <= 0) {
//       throw new Error ("Quantity cannot be less than 0");
//    };
//    const shopItem = shop.find(item => item.id === id);
//    const cartItem = cart.find(item => item.id === id);
//    if(cartItem.quantity < quantity) {
//       throw new Error ("You can't reduce what is in the cart")
//    }
//    if(cartItem) {
//       cartItem.quantity -= quantity;
//       shopItem.quantity += quantity;
//       return cartItem;
//    };
// }

// function removeItemFromCart(id) {
//    const shopItem = shop.find(item => item.id === id);
//    const cartItem = cart.find(item => item.id === id);
//    if(cartItem && shopItem) {
//       shopItem.quantity += cartItem.quantity
//    }
//    const removeItem = cart.filter(item => item.id !== id);
//    cart = removeItem;
//    return cart;
// }

// function clearCart() {
//    cart.forEach(cartItem => {
//    const shopItem = shop.find(item => item.id === cartItem.id)
//    if(shopItem) {
//    shopItem.quantity += cartItem.quantity
//    }
//    })
//    cart.length = 0;
//    return cart;
// }

// try {
//    console.log(addItemToShop("Apple"))
// } catch (error) {
//    console.log("error: ",error.message)
// }

// try {
//    console.log(addItemToShop("Book"))
// } catch(error) {
//    console.log("error: ",error.message)
// }

// try {
//    console.log(addItemToShop("Pen"))
// } catch(error) {
//    console.log("error: ",error.message)
// }

// try {
//    console.log(addItemToShop("Bread"))
// } catch(error) {
//    console.log("error: ",error.message)
// }

// try {
//    console.log(addItemToShop("Belt"))
// } catch(error) {
//    console.log("error: ",error.message)
// }

// try {
//    console.log(addItemToShop("Cup"))
// } catch(error) {
//    console.log("error: ",error.message)
// }

// try {
//    console.log(addItemToShop("Book"))
// } catch(error) {
//    console.log("error: ",error.message)
// }



// try {
//    console.log(addItemToShop("Book"))
// } catch(error) {
//    console.log("error: ",error.message)
// }
// try {
//    console.log(addItemToShop("Book"))
// } catch(error) {
//    console.log("error: ",error.message)
// }
// try {
//    console.log(addItemToShop("Book"))
// } catch(error) {
//    console.log("error: ",error.message)
// }

// console.log(addItemToShop("Apple"))
// console.log(addItemToShop("Book"))
// console.log(addItemToShop("Pen"))
// console.log(addItemToShop("Bread"))
// console.log(addItemToShop("Belt"))
// console.log(addItemToShop("Cup"))
// console.log(addItemToShop("Cup"))
// try {
//    console.log(modifyPrice(9, 2));
// } catch (error) {
//    console.log("error: ", error.message)
// }


// console.log(modifyPrice(1, 1200))
// console.log(modifyPrice(2, 300))
// console.log(modifyPrice(3, 2500))
// console.log(modifyPrice(4, 4000))
// console.log(modifyPrice(5, 250))
// console.log(modifyPrice(6, 500))
// console.log(updateShopQuantity(0, 20))
// console.log(updateShopQuantity(1, 20))
// console.log(updateShopQuantity(2, 20))
// console.log(updateShopQuantity(3, 20))
// console.log(updateShopQuantity(4, 20))
// console.log(updateShopQuantity(5, 20))
// console.log(updateShopQuantity(6, 20))
// console.log(addItemToCart(0))
// console.log(addItemToCart(1))
// console.log(increaseCartQuantity(0, 10))
// console.log(reduceCartQuantity(0, 4))
// console.log(removeItemFromCart(0))
// console.log(clearCart())
// console.log(cart)
// console.log(shop)



const words = ["apple", "banana", "kiwi", "cherry", "strawberry", "pineapples"]

// Output: ["strawberry", "pineapple"]

function findLongestWords(words) {
    let longestWords = []
    let maxLength = 0

    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i]
        if (currentWord.length > maxLength) {
            // Found a new longest length — reset the list
            maxLength = currentWord.length
            longestWords = [currentWord]
        } else if (currentWord.length === maxLength) {
            // Same length as current longest — add it
            longestWords.push(currentWord)
        }
    }

    return longestWords
}


console.log(findLongestWords(words))