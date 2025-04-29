let cart=[];
function addItemToCart(itemName,price,){
           cart.push({itemName,price,quantity})
    }

function increaseQuantityOfItem(indexOfItem){
    if(cart[indexOfItem]){
        cart[indexOfItem].quantity+=1
    }
}
console.log(increaseQuantityOfItem(0))

function remFromCart(itemName,quantity){
    let count=0;
    cart=cart.filter(item=>{
        if(item.itemName===itemName&&count<quantity){
            count++;
            return false
         }return true
    })
}
addItemToCart("apple",300,3)
// remFromCart("apple",1)
console.log(cart)