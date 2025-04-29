// let games=["Ludo","Scrabble","Chess","Cards","Monopoly"]
// games.push("Tetris")
// games.unshift("FIFA")
// games.pop()
// games.shift()
// // games.forEach(function(game){
// //     console.log(game)
// // })

// console.log(games.reverse())

// function largestNumber(num){
// let largeNum = num[0];
// for(let i=0;i<=num.length;i++){
//     if(num[i]>largeNum){
//         largeNum=num[i]
//     }
// }
// return largeNum
// }
// console.log(largestNumber([0,1,2,45,67,8,9,0,600,5,4,3,22,3,5]))

// function evenOddNum(nums){
//     let odd=[]
//     let even=[]
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]%2===0){
//             even.push(nums[i])
//         }else{
//             odd.push(nums[i])
//         }
//     }
//     return{
//         even,
//         odd,
//     }
// }
// let nums=[1,2,3,4,5,6,7,8,9,10]
// let result=evenOddNum(nums)
// console.log(result.even)
// console.log(result.odd)

// 

// let favGames = ["Ludo", "Scrabble", "Monopoly", "Chess", "Cards"]
// favGames.push("FIFA")
// favGames.unshift("Tetris")
// favGames.pop()
// favGames.shift()
// // favGames.forEach(function(game){
// //     console.log(game)
// // })
// console.log(favGames.includes("Chess"))
// console.log(favGames.reverse())

// function largestNumber(nums){
//     let largeNum = nums[0]
//     for(let i=1;i<nums.length;i++){
//         if(nums[i]>largeNum){
//             largeNum=nums[i]
//         }
//     }
//     return largeNum
// }
// console.log(largestNumber([2,33,5,6,7,88,9,0,2,3,5,4,33,66,7,33,77,63]))

// function evenOddNum(nums){
//     let even = [];
//     let odd = [];
//     for(let i=1;i<nums.length;i++){
//         if(nums[i]%2===0){
//             even.push(nums[i])
//         }else {
//             odd.push(nums[i])
//         }
//     }
//     return{
//         even,
//         odd,
//     }
// }
// let nums = [2,33,5,6,7,88,9,0,2,3,5,4,33,66,7,33,77,63]
// let result = (evenOddNum(nums))
// console.log("even: "+result.even)
// // console.log(evenOddNum([2,33,5,6,7,88,9,0,2,3,5,4,33,66,7,33,77,63]))

// function removeDupVal(nums){
//     let realVal=[]
//     for(let i=1;i<nums.length;i++){
//         if(!realVal.includes(nums[i])){
//             realVal.push(nums[i])
//         }
//     }
//     return realVal
// }
// let nums= [2,33,5,6,7,88,9,0,2,3,5,4,33,66,7,33,77,63]
// let value = removeDupVal(nums)
// console.log(value)
// // console.log(removeDupVal([2,33,5,6,7,88,9,0,2,3,5,4,33,66,7,33,77,63]))

// function sortNum(nums){
//     return nums.sort(function(a,b){
//         return a-b
//     })
// }
// let nums = [2,33,5,6,7,88,9,0,2,3,5,4,33,66,7,33,77,63]
// let sorted = sortNum(nums)
// console.log(sorted)

// function words(fruits){
//     lengthOfEachFruits = []
//     for(let i=0;i<fruits.length;i++){
//         lengthOfEachFruits.push(fruits[i].length)
//     }
//     return lengthOfEachFruits
// }
// console.log(words(["mango","Cashew","Grape"]))


// for(let i=1;i<=10;i++){
// console.log(i)
// }

// let i=10;
// let num=1;
// while (i>=num){
//     console.log(i);
//     i--;
// // }

// let i=1
// do{
//     console.log("i Love Coding "+ i);
//     i++;
// }while(i<=5)

// function sumNumbers(num){
//     let sum = 0
//     for(let i=1;i<=num;i++){
//         sum+=i
//            }
//         return sum
// }
// console.log(sumNumbers(50))

// let word = "H,e,l,l,o"
// let back = word.split(",")
// console.log(back)


// function sumNumbers(num){
//     let sum=0
//     for(let i=1;i<=num;i++){
//         sum+=i;
//     }
//     return sum
// }
// let num =5
// console.log(sumNumbers(num))

// function printEvenNum(nums){
//     let even = []
//     for(let i=1;i<nums.length;i++){
//         if(nums[i] % 2===0){
//             even.push(nums[i])
//         }
//     }
//     return even
// }
// let nums = [1,2,3,4,5,6,7,8,9,10]
// console.log(printEvenNum ("Even " + (nums)))


let cart = [];

function addToCart(name, price, quantity) {
    for (let i = 0; i < quantity; i++) {
        cart.push({ name, price });
    }
}

function removeItem(name, quantity) {
    let count = 0;
    cart = cart.filter(item => {
        if (item.name === name && count < quantity) {
            count++;
            return false; // skip (remove) this one
        }
        return true; // keep this item
    });
}

addToCart("apple", 2, 3);
addToCart("milk", 1.5, 2);

removeItem("apple", 2);

console.log(cart);

let nums=[1,2,3,4,5,6,7,8,9,10]
function oddEven(nums){
let odd=[]
let even=[]
for(let i=0;i<nums.length;i++){
    if(nums[i]%2===0){
        odd.push(nums[i])
    }else{
    even.push(nums[i])
}}
return{
    even,
    odd,
}
}
console.log(oddEven(nums))
