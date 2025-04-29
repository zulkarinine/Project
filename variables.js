// let exam = {
//     subject: "Mathematics",
//     hours: 3,
// };

// //exam.hours = 10;
// console.log(exam);


//exam["subject"] = "English";
//console.log(exam["subject"]);

//let duration = hours;
//console.log(exam[duration]);

//let namesOfBoys = ["Wasiu", "Habeeb", "Qudus", "Waliu", "Ramadan"];
//namesOfBoys[0] = 34;
//console.log(namesOfBoys);
//onsole.log(namesOfBoys.length);
//console.log(typeof namesOfBoys);

//function multiply(num1,num2) {
    //return num1 - num2;
//}
//console.log(multiply(2,1));

// function listOfNumbers(lstofnum) {
//     let results = []; // Create an array to store results

//     for (let i = 0; i < lstofnum.length; i++) {  // ✅ Corrected loop condition
//         if (lstofnum[i] % 2 === 0) {
//             results.push(lstofnum[i] + " is even");  // ✅ Fixed wording
//         } else {
//             results.push(lstofnum[i] + " is odd");
//         }
//     }

//     return results;  // ✅ Return the array of results
// }

// ✅ Correct function call
// console.log(listOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



// function factorialNumber (n) {
//     let number = 1;
//     for (let i = 2; i<=n; i++) {
//         number *=i;
//     }
// return number
// }
// console.log(factorialNumber(5))

// function factorialNumber (n) {
//     if (n===0 || n===1) return 1;
//     return n * factorialNumber(n-1)
// }
// console.log(factorialNumber(5))

// function fibonacciNo (n) {
//     let a = 0, b=1, temp;
//     for(let i=2; i<=n; i++) {
//         temp = a+b
//         a=b
//         b=temp
//     }
//     return n===0 ? a : b
// }
// console.log(fibonacciNo(6))


// function findLargestNumber (bign){
// if (bign.length===0) return "Array is empty"
// let largerNumber = bign[0];
// for (let i=1; i<bign.length; i++) {
//     if(bign[i] > largerNumber) {
//         largerNumber = bign[i];}
// }
// return largerNumber
// }
// console.log(findLargestNumber([2,4,5,33,6,77,8,9,21,3,4]))


// let answer = 0
// while (answer<=100) {
//     console.log(answer);
//     answer++
// }

// function sumNumbers(n){
//  let sum = 0
//  let i = 1
//  while (i<=5) {
//     sum +=i;
//     i++;
//  }
//  return sum    
// }
// console.log(sumNumbers(5))

// for(let i=1; i<=10; i++) {
//     console.log(i)
// }


// function sumNumbers (n) {
//     let sum=0;
//     let i=1;
//     while(i<=n){
//         sum+=i;
//         i++;
//     }
//     return sum
// }
// console.log(sumNumbers(5)) 

// let number = 1;
// while(number<=10) {
// console.log(number)
//     number++;
// }

// for (let i=1; i<=20; i++) {
//     console.log(i)
// }

// function sumNumbers (n){
//     let sum = 0;
//     let i = 1;
//     while(i<=n){
//         sum +=i;
//         i++;
//     }
//     return sum
// }
// console.log(sumNumbers(5))

// let i = 1
// while(i<=20){
//     console.log(i);
//     i+=2;
// }

// let number = 10
// while(number>=1){
//     console.log(number)
//     --number
// }

// function multiplication(n){
//    let i=1;
//    while(i<=10){
//     console.log(n + "x" + i + "=" + (n * i));
//     i++;
//    }
// }
// multiplication(2)
let toyBox = ["robot", "slime", "car"];
function addToy(toy) {
    toyBox.push(toy);
    console.log(toy + " added!");
  }
  
  function removeToy(toy) {
    let index = toyBox.indexOf(toy);
    if (index !== -1) {
      toyBox.splice(index, 1);
      console.log(toy + " removed!");
    } else {
      console.log(toy + " is not in the toy box!");
    }
  }
  
  function checkToy(toy) {
    if (toyBox.includes(toy)) {
      console.log("Yes! " + toy + " is in the toy box!");
    } else {
      console.log("Nope! " + toy + " is not in there.");
    }
  }
  
  function countToys() {
    console.log("You have " + toyBox.length + " toys.");
  }
  
  function showToys() {
    console.log("Your toys: " + toyBox.join(", "));
  }
  addToy("dinosaur");     // dinosaur added!
  removeToy("car");       // car removed!
//   checkToy("slime");      // Yes! slime is in the toy box!
//   countToys();            // You have 3 toys.
//   showToys();             // Your toys: robot, slime, dinosaur  
console.log(toyBox)

let cart=[]
function cartItems(items,quantity){
    cart.push(...new Array(quantity).fill(items));{
        return cart
    }
}
cartItems("apple",4)
cartItems("mango",2)
cartItems("groundnut",1)
cartItems("milk",3)
cartItems("biscuit",1)
cartItems("soap",5)
cartItems("bread",1)

function itemRemoved(cart,items,quantity){
    let count=0
    return cart.filter(originalCart=>{
        if(originalCart===items && count<quantity){
            count++;
            return false
        }return true
    })
}
cart=itemRemoved(cart,"apple",1)

function cartSummary(cart){
    let summary={};
    cart.forEach(items => {
        summary[items]=(summary[items]||0)+1
    });
    return summary
}
console.log(cartSummary(cart))

function printReceipt(cart) {
  const summary = cartSummary(cart);
  console.log("🧾 Your Cart:");
  for (let item in summary) {
      console.log(`${item} x${summary[item]}`);
  }
  console.log(`Total items: ${countItems(cart)}`);
}
printReceipt(cart);




