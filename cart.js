let cartSystem=[];

function addItem(name,price){
    cartSystem.push({name,price,quantity:1})
   }

function increaseQty(name,quantity){
    const findItem=cartSystem.find(item=>item.name===name)
    if(findItem){
        findItem.quantity=quantity+1
    }else{
        console.log("item not selected")
    }
    }

function reduceQty(name,quantity){
    const findItem=cartSystem.find(item=>item.name===name)
    if(findItem){
        findItem.quantity-=quantity
    }else{
        console.log("item not selected")
    }
}

function removeItem(name){
    const remItem=cartSystem.filter(item=>item.name!==name)
      cartSystem=remItem
    }

function checkItem(name){
    const findItem=cartSystem.filter(item=>item.name===name)
    if(findItem.length>0){
        console.log(name + " found")
    }else{
        console.log(name+ " is not available")
    }
}

function clearCart(){
    cartSystem.length=0
    console.log(cartSystem)
}
addItem("Shirt",3000)
addItem("Apple",700)
addItem("Book",1200)
addItem("Pen",120)
addItem("Bread",1700)
increaseQty("Apple",2)
increaseQty("Shirt",3)
increaseQty("Pen",4)
reduceQty("Pen",1)
removeItem("Bread")
checkItem("Apple")
clearCart()
console.log(cartSystem)
