// function calculator (num1, num2, operation) {
//     let result;
//     if (operation === "+") {
//         result = num1 + num2;
//     }
//     else if (operation === "-") {
//         result = num1 - num2;
//     }
//       return "Answer is " + result;
// }
// console.log(calculator(2,3,"+"));



// function Calculation (num1, num2, operation) {
//     let outcome;
//     if (operation === "+") {
//     outcome = num1 + num2;
//     }
//     else if (operation === "-") {
//         outcome = num1 - num2;
//     }
//     else if (operation === "/") {
//         outcome = num1 / num2;
//     }
//     return ("Answer is " + outcome);
//     }
//     console.log(Calculation(2,3,"/"));


// function checkNumber (num) {
//     let outcome;
//     if (num === "2") {
//         outcome = "This is an odd number";}
//     else if (num === "5") {
//         outcome = "This is an even number"}
//         else {
//             outcome = "No Idea"
//         }
//         return (outcome);
// }
// console.log (checkNumber("3"));


// function largerNumber (num1, num2) {
// if (num1 > num2) {
// console.log(num1 +  "is the largest number"); }
//     else if (num1 < num2) {
//         console.log(num2 +  "is the largest number");
//     }
//     else {
//         console.log("They are equal")
//     }
// }
// largerNumber(10 , 5)


// function bigNUmber (num1, num2) {

//     let outcome;
//     if (num1 > num2) {
//     outcome = num1 + "is the greatest number";}
//     else if (num1 < num2){
//         outcome = num2 + "is the greatest number";}
//         else {
//             outcome = "They are equal"
//         }
//         return outcome;
//     }
//     console.log(bigNUmber(20,20));



// function getGrade(score) {
//     let result;
//     if (score < "60"){
//     result = "Grade F";}
//     else if (score <= "69" || score === "60" ){
//         result = "Grade D";}
//         else if (score <= "79" || score === "70"){
//         result = "Grade C";}   
//         else if (score <= "89" || score === "80"){
//             result = "Grade B";}
//                 else if (score <= "100" || score === "90"){
//                     result = "Grade A";}
//                     else {
//                         result = "Grade not available";
//                     }
//                     return result;
//             } 
//             console.log(getGrade(70));
//             console.log(getGrade(25));
//             console.log(getGrade(45));
//             console.log(getGrade(55));
//             console.log(getGrade(90));
//             console.log(getGrade(10));
//             console.log(getGrade(59));
//             console.log(getGrade(39));
//             console.log(getGrade(20));
//             console.log(getGrade(52));
//             console.log(getGrade(88));
//             console.log(getGrade(100));
//             console.log(getGrade(101));

// function checkNumberType(number) {
//     let result;
//     if (number > "0") {
//     result = "positive";}
//     else if (number < "0"){
//         result = "Negative";
//     }
//     else {
//         result = "The number is zero";
//     }
//     return result;
// };
// console.log(checkNumberType("-10"));

// function checkNumber (number) {
//     if (number > 0) {
//         return "positive";}
//             else if (number < 0) {
//               return  "negative";
//             } else {
//                 return "The number is Zero"
//             }
//        }
//        console.log(checkNumber(0));



// function multiplication (number) {
//     for (let i=1; i<=10; i++) {
//         console.log(number  + "x" + i + "=" + (number * i))
//     }
// }
// multiplication(3)


// function multiplication (number) {
//     for (let i = 1; i<=10; i++) {
//         console.log(number  + "x" + i + "=" + (number * i))
//     }
// }
// multiplication(4);




// function multiplication (number) {
//     for (let i = 0; i<=10; i++){
//     console.log(number + "x" + i + "=" + (number * i))
// }
// }
// multiplication(5);

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


// let cart = [];

// function addToCart(name, price, quantity) {
//     for (let i = 0; i < quantity; i++) {
//         cart.push({ name, price });
//     }
// }

// function removeItem(name, quantity) {
//     let count = 0;
//     cart = cart.filter(item => {
//         if (item.name === name && count < quantity) {
//             count++;
//             return false; // skip (remove) this one
//         }
//         return true; // keep this item
//     });
// }

// addToCart("apple", 2, 3);
// addToCart("milk", 1.5, 2);

// removeItem("apple", 2);

// console.log(cart);

// let nums=[1,2,3,4,5,6,7,8,9,10]
// function oddEven(nums){
// let odd=[]
// let even=[]
// for(let i=0;i<nums.length;i++){
//     if(nums[i]%2===0){
//         odd.push(nums[i])
//     }else{
//     even.push(nums[i])
// }}
// return{
//     even,
//     odd,
// }
// }
// console.log(oddEven(nums))

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
// let toyBox = ["robot", "slime", "car"];
// function addToy(toy) {
//     toyBox.push(toy);
//     console.log(toy + " added!");
//   }
  
//   function removeToy(toy) {
//     let index = toyBox.indexOf(toy);
//     if (index !== -1) {
//       toyBox.splice(index, 1);
//       console.log(toy + " removed!");
//     } else {
//       console.log(toy + " is not in the toy box!");
//     }
//   }
  
//   function checkToy(toy) {
//     if (toyBox.includes(toy)) {
//       console.log("Yes! " + toy + " is in the toy box!");
//     } else {
//       console.log("Nope! " + toy + " is not in there.");
//     }
//   }
  
//   function countToys() {
//     console.log("You have " + toyBox.length + " toys.");
//   }
  
//   function showToys() {
//     console.log("Your toys: " + toyBox.join(", "));
//   }
//   addToy("dinosaur");     // dinosaur added!
//   removeToy("car");       // car removed!
// //   checkToy("slime");      // Yes! slime is in the toy box!
// //   countToys();            // You have 3 toys.
// //   showToys();             // Your toys: robot, slime, dinosaur  
// console.log(toyBox)

// let cart=[]
// function cartItems(items,quantity){
//     cart.push(...new Array(quantity).fill(items));{
//         return cart
//     }
// }
// cartItems("apple",4)
// cartItems("mango",2)
// cartItems("groundnut",1)
// cartItems("milk",3)
// cartItems("biscuit",1)
// cartItems("soap",5)
// cartItems("bread",1)

// function itemRemoved(cart,items,quantity){
//     let count=0
//     return cart.filter(originalCart=>{
//         if(originalCart===items && count<quantity){
//             count++;
//             return false
//         }return true
//     })
// }
// cart=itemRemoved(cart,"apple",1)

// function cartSummary(cart){
//     let summary={};
//     cart.forEach(items => {
//         summary[items]=(summary[items]||0)+1
//     });
//     return summary
// }
// console.log(cartSummary(cart))

// function printReceipt(cart) {
//   const summary = cartSummary(cart);
//   console.log("🧾 Your Cart:");
//   for (let item in summary) {
//       console.log(`${item} x${summary[item]}`);
//   }
//   console.log(`Total items: ${countItems(cart)}`);
// }
// printReceipt(cart);

// function multiplication (number) {
//     for (let i=1; i<=10; i++) {
//     console.log(number + "x" + i + "=" + (number * i));}
// }
// multiplication(3)



// function getGrade(number) {
//     let gradingMark;
//     if (number < 60) {
//         gradingMark = "Grade F";
//     }
//     else if (number < 70 || number === 60) {
//         gradingMark = "Grade C";
//     }
//     else if (number < 90 || number === 70) {
//         gradingMark = "Grade B";
//     }
//     else if (number < 101 || number === 90) {
//         gradingMark = "Grade A";}
//             else {
//                 gradingMark = "Not Graded"
//             }
//             return gradingMark
//         }
//    console.log(getGrade(98));


// let word = "level"
// let letters = word.split("")
// console.log(letters);


// function isPalindrome(word) {
//     word = word.toLowerCase();
//     let reversedWord = word.split("").reverse().join("");
//     if (word === reversedWord) {
// console.log("its a pallindrome")
//     } else {
//         console.log("its not a pallindrome")
//     }
// }
// isPalindrome("son")

// function divisibleNumber(number) {
//     let outcome;
//     if (number % 3 === 0 && number % 5 === 0) {
//         outcome = "FizzBuzz";
//     }
//     else if (number % 3 === 0) {
//         outcome = "Fizz";
//     }else if (number % 5 === 0) {
//         outcome = "Buzz";
//     }
//     else {
//         outcome = number;
//     }
//     return outcome;
// }
// console.log(divisibleNumber(65))


// function listOfNumbers(lstofnum) { 
//     let oddNumber=[]
//     for (let i = 0; i < lstofnum.length; i++) {
//         if (lstofnum[i] % 2 === 0){
//             oddNumber.push(lstofnum[i] + " is odd");
//         }else {
//             oddNumber.push(lstofnum[i] + " is even")
//         }
//            } 
//            return oddNumber;
// }
// console.log(listOfNumbers(["1","2","3","4","5","6","7","8","9","10"]));

// function oddNumber(lstofnum)
// {
//     for (const numbers of lstofnum)
//     {
//         if(numbers % 2 != 0)
//             console.log(numbers);
//     }
//         }
//         oddNumber([1,2,3,4,5,6,7,8,9,10])

// let job = "IT Officer"
// let outcome;
// if (job === "cashier") {
// outcome = "Issues Reciept";
// } else if (job = "IT Officer") {
//     outcome = "Manages Server";
// }else if (job = "waiter")
//     outcome = "attend to customer";
//         else {
//             outcome = "no job description";
//         }
//         console.log(outcome)

// switch (job) {
//     case "cashier": outcome ="Issues Reciept";break;
//     case "IT Officer": outcome = "Manages Server";break;
//     case "waiter": outcome = "attend to customer";break;
//     default: outcome = "no job description";break;
// }
// console.log(outcome)

// function getDay(num){
//     let calday;
//         switch (num){
//         case 1: calday = "sunday";break;
//         case 2: calday = "monday";break;
//         case 3: calday = "tuesday";break;
//         case 4: calday = "wednesday";break;
//         case 5: calday = "thursday";break;
//         case 6: calday = "friday";break;
//         case 7: calday = "saturday";break;
//         default: calday = "not available";break;
//     }
//     return calday
// }
// console.log(getDay(5))


// function getDay(num){
//     let calday;
// switch (num){
//     case 1: calday = "Monday";break;
//     case 2: calday = "Tuesday";break;
//     case 3: calday = "Wednesday";break;
//     case 4: calday = "Thursday";break;
//     case 5: calday = "Friday"; break;
//     case 6: calday = "Saturday";break;
//     case 7: calday = "Sunday";break;
// }
// return calday
// }
// console.log(getDay(2))


// function operation(num1, num2, operator){
//     let answer;
//     switch (num1, num2, operator) {
//         case num1, num2, "+":
//             answer = num1 + num2;
//             break;
//             case num1, num2, "-":
//                 answer = num1 - num2;
//                 break;
//                 case num1, num2, "/":
//                     answer = num1 / num2;
//                     break;
//                     case num1, num2, "*":
//                         answer = num1 * num2;
//                         break;
//                         default: "number not recognized";
//                         break;
//     }
//     return answer
// }console.log(operation(3,3,"*"))

// let nums = [1,2,3,4]
// console.log(nums.reverse())

//let footballerName;
//footballerName = "Cristiano Ronaldo"
   //  console.log(footballerName);

//const vowelLetters = "aeiou";
    //console.log(vowelLetters);
//vowelLetters = footballerName
//console.log(vowelLetters);

//let nameOfSchool = "Young Shall Grow";
//console.log(typeof nameOfSchool);
//let houseAddressNo = 20;
//console.log(typeof houseAddressNo)
//let result = true;
//console.log(typeof result)
//let sex;
//console.log(typeof sex)
//let newIdea = null;
//console.log(typeof newIdea)
//let veryLargeNumber = 297464784384629742n;
//console.log(typeof veryLargeNumber)

//let classOf2024 = {
//numberOfStudents : 500,
//numberOfExamPassed : 300,
//numberofExamFailed : 200,
//nameOfSchool : "Young Shall Grow",
//}

//classOf2024.numberofExamFailed = 202,
//console.log(classOf2024.numberofExamFailed)

//let nameOfFruits = ["Apple", "Mango", "Cashew", "Grape"]
//console.log(nameOfFruits);

//function sayHi(name) {
   // console.log("Hi! " + name)
//}

//sayHi("Ola");

//function multiply(num1,num2) {
  //  return num1 % num2;
//}
//console.log(multiply (3,2));

//let num1 = 18
//let num2 = 12

//let is1GreaterThan2 = num1>=num2;
//console.log(is1GreaterThan2);
//let age = 14;
   // let allowedToDrink = age >= 19 ? "can drink" : "cannot drink";
   // console.log(allowedToDrink);

   //let canAfford = true;
  // let workingClass = false;
   //shopping = canAfford || workingClass;
   //console.log(shopping);

  // let age = 21;
   //finalYear = true;
   // let isFreeTograduate = age >= 20 && finalYear;
    //console.log(isFreeTograduate)


//let priceOfChocolate = 5;
//let hasAmountInCash = 2;

//const canBuyChocolate = hasAmountInCash >= priceOfChocolate;
//if (canBuyChocolate) {
//console.log("Enjoy your chocolate")
//} else {
   //console.log("Not enough cash")
//} ;

// let ticketPrice = 50
// let accountBalance = 20;
// let allowedToWatchAMovie = accountBalance >= ticketPrice;

// if (allowedToWatchAMovie) {
//    console.log("Payment for Movie Approved")} 
//    else {
//       console.log("Insufficent Balance")
//    };

//  let thePriceOfCataractSurgery = 120000;
//  let cashAtHand = 1150000;
//  const freeToDoSurgery = cashAtHand >= thePriceOfCataractSurgery;
//  if (freeToDoSurgery) {
// console.log("Surgery Booked")} else {
//    console.log("Surgery Declined");
// }
 
// let job = "Fashion Designer"
// if (job === "cashier") {
//    console.log("recieves money")
// }
// else if (job === "security") {
//    console.log("Protects Properties")
// }
// else if (job === "IT Office") {
//    console.log("Keeps data")
// }
// else if (job === "Manager") {
//    console.log("Attend to office work")
// }
// else {
//    console.log("Not Recognized")
// }


// let job = "Manager"
// switch (job) {

// case "cashier":
// console.log("recieves money");
// break;
// case  "security":
//    console.log("Protects Properties");
//    break;
// case "IT Office":
//    console.log("Keeps data");
//    break;
// case "Manager":
//    console.log("Attend to office work");
//    break;
// default:
//    console.log("Not Recognized")
// }

// let number = 0; 
// while (number < 100) {
//    console.log(number); number++;
// };

// function multiply(num1 , num2) {
//    return num1 * num2
//    }
// console.log(multiply(2,2))

// function addition(num1,num2,num3) {
//    return num1 + num2 + num3;
//    }
//    console.log(addition(2,2,1))



// function multiplication(number){
//    for (let i=0; i<= 10; i++) {
//       console.log(number + "x" + i + "=" + (number * i))
//    }
//  }multiplication(2);


// function calculator(num1, num2, operator) {
//    let answer;
//    switch (num1, num2, operator) {
//       case num1, num2, "+": answer = num1 + num2;break;
//       case num1, num2, "-": answer = num1 - num2;break;
//       case num1, num2, "/": answer = num1 / num2;break;
//       case num1, num2, "*": answer = num1 * num2;break;
//       default: answer = "Invalid Operator"
// }
// return answer;
// }
// console.log(calculator(5,3,"+"))
// console.log(calculator(10,4,"-"))
// console.log(calculator(6,2,"*"))
// console.log(calculator(20,5,"/"))
// console.log(calculator(7,3,"%"))

// function trafficLightMessage(color)  {
//    let message;
//    switch (color) {
//       case "red": message = "Stop!";break;
//       case "yellow": message = "Get ready!";break;
//       case "green" : message = "Go";break;
//       default: message = "invalid Color";break;
//    };
//    return message
// }
// console.log(trafficLightMessage("red"))
// console.log(trafficLightMessage("yellow"))
// console.log(trafficLightMessage("green"))
// console.log(trafficLightMessage("blue"))

// function getMonthName(monthNumber) {
//    let month;
//    switch (monthNumber) {
//       case 1: month = "January";break;
//       case 2: month = "February";break;
//       case 3: month = "March";break;
//       case 4: month = "April";break;
//       case 5: month = "May";break;
//       case 6: month = "June";break;
//       case 7: month = "July";break;
//       case 8: month = "August";break;
//       case 9: month = "September";break;
//       case 10:month = "October";break;
//       case 11:month = "November";break;
//       case 12:month = "December";break;
//    }
//    return month
// }
// console.log(getMonthName(1))
// console.log(getMonthName(2))
// console.log(getMonthName(3))
// console.log(getMonthName(4))
// console.log(getMonthName(5))
// console.log(getMonthName(6))
// console.log(getMonthName(7))
// console.log(getMonthName(8))
// console.log(getMonthName(9))
// console.log(getMonthName(10))
// console.log(getMonthName(11))
// console.log(getMonthName(12))


// for (let num = 0; num<=100; num++){
//    console.log(num);
// }

// function multiplicationTable (num) {
//    let multiplication = 0
//    for (let i=1;i<=10; i++){
//    console.log(num + "x" + i + "=" +(num * i)
//    )}
//    return multiplication
// }
// multiplicationTable(5)

// let numbers =[1,2,3,4,5,6,7];
// // for (let i=0; i<=numbers.length; i++)[
// //    console.log(numbers[i])
// // ]
// let i=0;
// while (i<=numbers.length) {
//    console.log(numbers[i]);
//    i++;
// }

// function countDown (n) {
//    while (n>=0) {
//       console.log(n);
//       n--;
//    }
//    console.log("The End")
// }
// countDown(20)

// function sumNumbersWhile (n) {
// let fig = 0;
//    while (n>= 1) {
//             fig+=n;
//             n--;
//    }
//    return fig
// }
// console.log(sumNumbersWhile(10))

// let numbers = [1,2,3,4,5,6,7]
// for (const elements of numbers) {
//    console.log(elements);
// }

// const voice = "who are you";
// const parts = voice.split(' ');
// console.log(parts)


// function factorialNumber(n) {
// if (n === 0 || n === 1) return 1;
// return n * factorialNumber(n-1);
// }
// console.log(factorialNumber(5))


// function calculateFactorial(n) {
//    let result = 1;
//    for (let i = 2; i<=n; i++) {
//       result *=i;
//    }
//    return result;
// }
// console.log(calculateFactorial(4))

// function calculateFactorial (n) {
//    if(n === 0 || n === 1) return 1;
//    return n * calculateFactorial(n-1);}
// console.log(calculateFactorial(5))


// function findLargestNumber(arr) {
// if (arr.length === 0) return "array is empty";
// let largest = arr[0];
// for (let i = 1; i < arr.length; i++) {
// if (arr[i] > largest) {
//    largest = arr[i];
// }
// }
// return largest
// }
// console.log(findLargestNumber([2,5,8,100,10,23,6,9]))

// function calculateFactorial(n) {
//    let result = 1;
//    for (let i = 2; i<=n; i++) {
// result *=i;
//    }
//    return result
// }
// console.log(calculateFactorial(4))

// function calculateFactorial(n) {
//    if (n===0 || n===1) return 1;
//    return n * calculateFactorial(n-1);
//    }
//    console.log(calculateFactorial(5))


// function findLargestNumber (lstn) {
// if (lstn.length === 0) return "Array is empty";
// let largerNumber = lstn[0];
// for (let i = 1; i<lstn.length; i++) {
//    if (lstn[i] > largerNumber) {
//       largerNumber = lstn[i];
//    }
// }
// return largerNumber
// }
// console.log(findLargestNumber([9,6,3,7,9,1,2,4,5,33,4,7,9]))

// function fibonacciNo (n) {
//    let a = 0, b = 1, temp;
//    for (i=2; i<=n; i++) {
//       temp = a+b
//       a=b
//       b=temp
//    }
//    return n==0 ? a : b
// }
// console.log(fibonacciNo(6))

// function factorialNumber (n) {
//    result = 1;
//    for(let i=2; i<=n; i++) {
//       result *=i;
//    }
//    return result
// }
// console.log(factorialNumber(5))

// function factorialNumber(n) {
//    if(n===0 || n===1) return 1;
//    return n * factorialNumber(n-1);
// }
// console.log(factorialNumber(5))


// function veryLargeNumber (int){
// if (int.length===0) return "Array is Empty";
// let largerNumber = int[0];
// for (let i=1; i<int.length; i++) {
//    if(int[i] > largerNumber) {
//       largerNumber = int[i];
//    }
//   }
//   return largerNumber
// }
// console.log(veryLargeNumber([3,45,6,7,88,3,12,43,6,7,0,2]))

// function fibonacciNo (n) {
//    let a=0, b=1, temp;
//    for (let i=2; i<=n; i++){
//       temp = a+b;
//       a=b;
//       b=temp
//    }
// return n===0 ? a : b
//    }
//    console.log(fibonacciNo(10))

// function getDay (n) {
//    let day;
//    switch (n){
//       case 1: day = "Sunday";break;
//       case 2: day="Monday";break;
//       case 3:  day="Tuesday";break;
//       case 4: day="Wednesday";break;
//       case 5: day="Thursday";break;
//       case 6: day="Friday";break;
//       case 7: day="Saturday";break;
//    }
//    return day
// }
// console.log(getDay(5))

//  function sumNumbers (n) {
//    let sum = 0;
//    let num = 1;
//    while (num <= n) {
//       sum +=num;
//       num++
//    }
//    return sum
//  }
//  console.log(sumNumbers(5))

// let num=[1,2,3,4]
// num.reverse()
// console.log(num)

// for(let i=0;i<=5;i++){
//    console.log("hi " + i)
// }


// for(let i=1;i<=10;i++){
//    console.log(i)
// }


// let i=10;
// while(i>=1){
//    console.log(i)
//    i--
// // }

// let i = 1
// do{
//    console.log("I love Coding " + i);
//    i++;
// }while (i<=3)

// function evenNum(nums){
//    let even = [];
//    for(let i=1; i<nums.length;i++){
//       if(nums[i] %2===0){
//          even.push(nums[i]);
//       }
//    }
//    return even
// }
// console.log(evenNum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))

// let i = 10
// while(i>=1){
//    console.log(i);
//    i--
// }

// function multiplication(num){
//    let result;
//    for (let i=1;i<=10;i++){
//       console.log(num + "x" + i + "=" + num * i)
//    }
//    return result
// }
// multiplication(5)

// function sumNumbers(nums){
//    let sum=0
//    for(let i=1;i<=nums;i++){
//       sum +=i;
//    }
//    return sum
// }
// console.log(sumNumbers(50))

// function FizzBuzz(num){
//    let outcome;
// if(num%3===0 && num%5===0){
//       outcome="FizzBuzz"}
//    else if(num%3===0){
//       outcome = "Fizz"
//    }else if (num%5===0){
//       outcome = "Buzz"
//    }else{
//       outcome = num
//    }
//    return outcome
// }
// console.log(FizzBuzz(15))

// let favGames=["Ludo","Snooker","Card","Play Station","Wrestling"]
// favGames.push("Fifa")
// favGames.unshift("Motor race")
// favGames.pop()
// favGames.shift()
// // favGames.forEach(function(fav){
// //     console.log(fav)
// // })

// favGames.reverse()
// console.log(favGames)

// function largerNum(num){
//     let largest = num[0]
//     for(let i=0; i<num.length;i++){
//         if (num[i]>largest){
//             largest=num[i]
//         }
        
//     }
//     return largest;
// }
// console.log(largerNum([1,23,45,3,2,6,88,9,54,2,7]))

// function evenOddNum(nums){
//     let even= []
//     let odd = []
//     for(let i=0;i<nums.length;i++){
//         if(nums[i] % 2===0){
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
// console.log(evenOddNum([1,2,3,4,5,6,7,8,9,10]))

// function avoidDuplicate(nums){
//     let realVal = []
//     for(let i=0;i<nums.length;i++){
//         if(!realVal.includes(nums[i])){
//             realVal.push(nums[i])
//         }
//     }
//     return realVal
// }
// console.log(avoidDuplicate([1,1,11,2,2,3,4,5,6,7,7,7,8,9,10,10]))

// function sortVal(nums){
//     return nums.sort(function (a,b){
//         return a-b
//     })
// }
// console.log(sortVal([4,3,2,1]))

// function lstOfWords(words){
//    let lengthOfEachWord=[]
//     for(let i=0;i<words.length;i++){
//         lengthOfEachWord.push([words[i].length])
//     }
//     return lengthOfEachWord
// }
// let words = ["Take","Me","To","Mama","Please"]
// let lengths = lstOfWords(words)
// console.log(lengths)
// // console.log(lstOfWords(["Take","Me","To","Mama","Please"]))



// let cart=[];

// function addItemToCart(item){
//    cart.push(item);
//    return cart
// }
// addItemToCart("Bag")
// addItemToCart("Pen")
// addItemToCart("Pencil")
// console.log(cart)






// let favFood=["Rice","Beans","Bread","Pap"]
// push()
// unshift()
// pop()
// shift()
// foreach()
// includes()
// reverse()
// indexof()

// favFood.push("Yam")
// favFood.unshift("Garri")
// favFood.pop()
// favFood.shift()
// console.log(favFood)
// favFood.forEach(function(food){
//     console.log(food)
// })
// console.log(favFood.includes("Beans"))
// console.log(favFood.indexOf("Beans"))

// let subjects = ["Mathematics","English","Yoruba"]
// subjects.splice(0,3)
// console.log(subjects)
// let mini=subjects.splice(0,1)
// console.log(mini)
// console.log(subjects.indexOf("Economics"))
// let firstRemoved=schoolSubject.pop()
// let lasRemoved=schoolSubject.shift()
// subjects.forEach(function(subject){
//     console.log("I love " + subject + "!")
// })

// let search = subjects.find(function(subject){
//     return subject==="French"
// })
// console.log(search)

// let favSubject=subjects.filter(function(fs){
//     return fs !== "Mathematics";
// });
// console.log(favSubject)
// let advSubjects=subjects.map(function(subject){
//     return "Advance " + subject; 
// });
// console.log(advSubjects)
// // console.log(subjects)
// // console.log(firstRemoved)
// // console.log(lasRemoved)

// let numbers = [1,2,3,4,5,6,7,8,9,10]
// let evenNUmbers=numbers.filter(numbers=> numbers % 2 ===0)
// console.log(evenNUmbers)


// let animal1=["Bird","Lion","Goat"]
// let animal2=["Monkey","Cow","Elephant"]
// let animal3= ["Giraffe","Snail","Rabbit"]
// let animalKingdon=animal1.concat(animal3,animal2,["Pig","Donkey"])

// // console.log(animalKingdon)
// // console.log(animal1.includes("lion"))
// // if(animal1.includes("Lion")){
// //     console.log("king of the jungle")
// // }

// // let anim=animal1.join(" ")
// // console.log(anim)

// console.log(animal1.reverse())

// let toyBox=[]
// function addToy(toy){
//     toyBox.push(toy)
//     console.log(toy + " is succesfully added")
// }
// function remToy(toy){
//     let toyIndex = toyBox.indexOf(toy)
//     if(toyIndex!==-1){
//         toyBox.splice(toyIndex,1)
//         console.log(toy + " is succesfully removed")
//     }
// }
// function findToy(toy){
//     if(toyBox.includes(toy)){
//     console.log("found " + toy)
// }
// }
// function countToy(){
//     console.log("you have " + toyBox.length + " amount of toys")
// }
// function showToy(){
//     console.log("your toys: " + toyBox.join(","))
// }
// addToy("car")
// addToy("Bike")
// addToy("key")
// addToy("house")
// addToy("doll")
// remToy("key")
// findToy("house")
// countToy()
// showToy()
// console.log(toyBox)

// let numbers = [2, 5, 8, 11, 15, 18];
// let multiple=numbers.map(function(result){
//     return "number " + result;
// })
// console.log(multiple)

// let numbers = [2, 5, 8, 11, 15, 18];
// let multiple= numbers.map(number=> "number " + number);
// console.log(multiple)

// let players = [
//     { name: "Alex", score: 10 },
//     { name: "Bree", score: 25 },
//     { name: "Chris", score: 18 },
//     { name: "Dana", score: 30 }
//   ];
//   let playerName=players.map(player=> player.name)
//   console.log(playerName)
//   let playerName=players.map(function(players){
//     return players.name
//   })
//   console.log(playerName)
// let playerScore=players.map(player=> player.score)
// console.log(playerScore)

// let playerScore=players.map(function(player){
//     return player.score
// })
// console.log(playerScore)

// let even=numbers.filter(num=> num %2===0)
// console.log(even)
// let even=numbers.filter(function(numbers){
//     return numbers %2===0
// })
// console.log(even)

// let nums = [3, 7, 10, 12, 17, 20, 25];
// let people = [
//     { name: "Anna", age: 12 },
//     { name: "Ben", age: 17 },
//     { name: "Cara", age: 21 },
//     { name: "David", age: 15 },
//     { name: "Ella", age: 30 }
//   ];


//   let even=people
//   .filter(person=> person.age<18)
//   .map(person=>person.name);
//   console.log(even)
//   let even=nums.filter(nums=> nums%2===0)
//   let even2=even.map(even=> "Even: " + even)
//   console.log(even2)


//   let aldult=people.filter(people=> people.name.length>4)
//   console.log(aldult)
// let newNum=nums.map(num=> "Value: " +num)  
// console.log(newNum)

// let newNum=nums.map(function(num){
// return "1"+num
// })
// console.log(newNum)



// let peopleAge=people.map(function(people){
//     return people.age
// })
// console.log(peopleAge)

// let about=people.map(function(people){
//     return people.name + " is " + people.age
// })
// console.log(about)

// let scores = [55, 62, 70, 85, 40, 99, 100];
// let students = [
//     { name: "Leo", grade: 85 },
//     { name: "Mia", grade: 62 },
//     { name: "Noah", grade: 47 },
//     { name: "Zoe", grade: 90 },
//     { name: "Ian", grade: 73 }
//   ];

// let studentStatus=students.map(function(student){
//     return{
//         name:student.name,
//         status: student.grade >=60 ? "pass" :"fail"
//     }
// })
// console.log(studentStatus)
//   let remark=students.map(student=> student.name + " scored " + student.grade + " points ")
//   console.log(remark)
// let getScore=scores.filter(score=> score>50)
// console.log(getScore)  
// scoreFormat=scores.map(score=> "Score: " + score)
// console.log(scoreFormat)

// let studentName=students
// .filter(student=> student.grade<60)
// .map(student=>student.name);
// console.log(studentName)
// let remark=students.map(function(student){
//     if(student.grade>60){
//         console.log(student.name + " passed")
//     }else{
//         console.log(student.name + " failed")
//     }
//          })
// let perfectScore=scores
// .filter(score=> score===100)
// .map(score=> "perfect: " + score)
// console.log(perfectScore)


// let products = [
//     { name: "Laptop", price: 1200 },
//     { name: "Mouse", price: 25 },
//     { name: "Keyboard", price: 75 },
//     { name: "Monitor", price: 300 },
//     { name: "USB Cable", price: 10 }
//   ];

//   let books = [
//     { title: "The Hobbit", pages: 310 },
//     { title: "Diary of a Wimpy Kid", pages: 220 },
//     { title: "Harry Potter", pages: 410 },
//     { title: "Charlotte's Web", pages: 180 },
//     { title: "Percy Jackson", pages: 350 }
//       ];

//       let bsh=books.filter(book=>book.title.startsWith("H"))
//       console.log(bsh)
// let bookTitle=books
// .filter(book=>book.pages >300)
// .map(book=>book.title)
// console.log(bookTitle)

// let expensiveCheap=products.map(function(product){
//    if(product.price>100){
//     return product.name+" is "+" expensive"
//    }else{
//     return product.name+" is "+" cheap"
//    }
// })
// console.log(expensiveCheap)


    //   let productBelowPrice=products
    // .filter(product=>product.price<100)
    // .map(product=>"Buy: "+product.name+" $"+product.price)
    // console.log(productBelowPrice)
    
    //   console.log(productBelowPrice)
// let bookAbovePages=books.filter(book=>book.pages>=300)
// console.log(bookAbovePages)
// let productLength=products.filter(product=>product.name.length>6)
// console.log(productLength)
// //   let productsRemark=products.map(product=> product.name + " cost " + "$" + product.price
//   )
//   console.log(productsRemark)
//   let justPrice=products.map(product=>product.price)
//   console.log(justPrice)

//   let bookPage=books.map(book=>book.title + " - " + book.pages + " pages")
//   console.log(bookPage)

//   let bookTitle=books.map(book=>book.title)
//   console.log(bookTitle)

// let firstName="dele"A
// let secondName="DELE"
// // let upper=firstName.toUpperCase()
// console.log(firstName.toUpperCase())

// console.log(firstName.toLowerCase===secondName.toLowerCase)

// let books = [
//     { title: "The Hobbit", pages: 310 },
//     { title: "Harry Potter", pages: 410 },
//     { title: "harry potter and the Goblet", pages: 500 },
//     { title: "POTTER Magic", pages: 280 },
//     { title: "Charlotte's Web", pages: 180 }
//   ];
  
// let potterBooks=books
// .filter(book=>book.title.toLowerCase().includes("potter") && book.pages>300)
// .map(book=>book.title)
// console.log(potterBooks)

// let potterBooks=books.filter(book=>book.title.toLowerCase().includes("potter") && book.pages>300)
// console.log(potterBooks)

// let students = [
//     { name: "Luna", grade: 85 },
//     { name: "mark", grade: 40 },
//     { name: "SARA", grade: 95 },
//     { name: "tommy", grade: 55 },
//     { name: "Zane", grade: 72 }
//   ];
//   let books = [
//     { title: "The Hobbit", pages: 310 },
//     { title: "Magic Land", pages: 200 },
//     { title: "harry potter", pages: 410 },
//     { title: "Magic School", pages: 450 },
//     { title: "The Jungle Book", pages: 150 }
//   ];

//   let eachStudent=students.map(function(student){
//     return{
//         name:student.name.toLowerCase(),
//         grade:student.grade,
//         passed:student.grade <60?true:false
//     }
//   })
//   console.log(eachStudent)
//   let magicBook=books.filter(book=>book.title.toLowerCase().includes("magic"))
//   console.log(magicBook)
//   let studentStatus=students.map(function(student){
//     return{
//         name:student.name,
//         status:student.grade <60 ? "fail" : "pass"
//     }
//   })
//   console.log(studentStatus)

// let lowerStudentNames=students.map(student=>student.name.toLowerCase())
// console.log(lowerStudentNames)

// let grade=students.filter(student=>student.grade<60)
// console.log(grade)

// let toys = ["teddy bear", "robot", "dinosaur", "puzzle", "yo-yo"];
//  toys.pop()
//  toys.shift()
//  toys.push("drone")
//  toys.unshift("ball")
//  let toysIncludeo=toys.filter(toy=>toy.includes("o"))
//  console.log(toysIncludeo)
//  console.log(toys.includes("robot"))

// let players = [
//   { name: "Alex", score: 95 },
//   { name: "bobby", score: 40 },
//   { name: "Chris", score: 70 },
//   { name: "diana", score: 85 },
//   { name: "Eli", score: 50 }
// ];
//  let playerStatus=players.map(function(player){
//   return{
//     name: player.name.toLowerCase(),
//     status: player.score <55 ? "fail" : "pass"
//   }
//  })
//  console.log(playerStatus)

//  let playerRemark=players.map(player=> player.name + " scored "+player.score+ " points")
//  console.log(playerRemark)

//   let allPassPlayer=players
//   .filter(player=>player.score >55)
//   .map(player=>player.name.toUpperCase())
//   console.log(allPassPlayer)

// let shelf1 = ["book A", "book B"];
// let shelf2 = ["book C", "book D"];
// let shelf3 = ["book E"];
// let bigShelfs=shelf1.concat(shelf2,shelf3)
// bigShelfs.pop()
// bigShelfs.shift()
// bigShelfs.unshift("book X")
// bigShelfs.push("book Z")
// let bookStatus=bigShelfs.map(bigShelf=>"now reading: "+bigShelf)
// let keepBookD= bigShelfs.filter(bigShelf=>bigShelf.toLowerCase().includes("d"))
// console.log(keepBookD)
// // console.log(bookStatus)
// // console.log(bigShelfs)

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNums=numbers
// .filter(even=>even %2===0)
// .map(even=>"Number: "+ even)
// evenNums.pop()
// evenNums.shift()
// evenNums.push("Number: 11")
// evenNums.unshift("Number: 0")

// console.log(evenNums)

// let toys = ["teddy bear", "robot", "dinosaur", "puzzle", "yo-yo"];
// toys.pop()
// toys.shift()
// toys.unshift("ball")
// toys.push("drone")
// let upperCaseToy=toys.map(toy=>toy.toUpperCase())
// let toysThatIncludesO=toys.filter(toy=>toy.toLowerCase().includes("o"))
// toys.splice(1,2,"kite")
// console.log(toys)
// // console.log(toysThatIncludesO.includes("robot"))

// let players = [
//   { name: "Alex", score: 95 },
//   { name: "bobby", score: 40 },
//   { name: "Chris", score: 70 },
//   { name: "diana", score: 85 },
//   { name: "Eli", score: 50 }
// ];

// let score=players.map(player=>player.score)
// score.sort((a,b)=>a-b)

// let index=score.findIndex(score=>score<60)
// score.splice(index,1,300)
// let found=score.find(score=>score>45)
// console.log(score)
// console.log(found)
// console.log(score)

// let School=[
//   {classA: "boys"},
//   {classB: "girls"}
// ]
// console.log(School)

// names=["dele","wale","kunle"]

// let df=names.find(names=>names("wale"))
// console.log(df)
// // console.log(names.find("wale"))\


// let letter = [1,3,5,4,2]
// letter.sort()
// console.log(letter)





// let cart=[]

// function addToCart(item){
// cart.push(item)
// return cart
// }

// addToCart("apple")
// addToCart("Orange")
// addToCart("Book")
// addToCart("Pen")
// addToCart("Calculator")
// remFromCart("Book")

// function remFromCart(item){
//   let cartIndex=cart.indexOf(item)
//   if(cartIndex!==-1){
//     cart.splice(cartIndex,1)
//     return cart
//   }

// function remFromCartByFilter(item){
//   let removedFromCart=cart.filter(cart=>cart!==item)
//   cart=removedFromCart
//     }
//   remFromCartByFilter("apple")
//   console.log(cart)

//   function clearCart(){
//     cart=[];
//   }
// console.log(cart)

// let boysName=["ola","kunle","dele","wale","felix"]
// let filteredName=boysName.filter(name=>name==="felix")
// console.log(filteredName)


// addToCart("apple")
// addToCart("Orange")
// addToCart("Book")
// addToCart("Pen")
// addToCart("Calculator")
// remFromCart("Book")

// // console.log(cart)

// const dogs = [
//   { name: "Fido", age: 3 },
//   { name: "Buddy", age: 5 },
//   { name: "Max", age: 2 },
// ]

// let dogName=dogs.map(function(dog){
//   return dog.name
// })
// console.log(dogName)

// let cart = [];

// cart.push(...cart.length(7).fill("apple"));   // Adds 7 apples
// cart.push(...cart.length(4).fill("orange"));  // Adds 4 oranges



// console.log(cart);


// let cart=[]
// function addToCart(items,quantity){
//   cart.push(...new Array(quantity).fill(items))
//   return cart
// }
// addToCart("apple", 4)
// addToCart("grape",3)
// addToCart("soap",1)
// // console.log(cart)


// function removeItem(cart,items,quantity){
//   let count=0
//   return cart.filter(currentItem=>{
// if(currentItem===items && count<quantity){
//   count++;
//   return false;
// }else{
//   return true;
// }
//   })
// }
// cart=removeItem(cart,"soap",2)
// // console.log(cart.length("apple"))

// let summary={name:"ola",class:"primary 4"}
// for(let item in summary){
// console.log(summary[item])
// }

// function inputNumber(num) {
//     if(typeof num !== "number" || isNaN(num)) {
//         throw new Error(num + " is not a number")
//     }
//     if(num < 1 || num > 100) {
//         throw new Error("number can not be less than 1 or greater than 100")
//     }
//     if(!Number.isInteger(num)) {
//         throw new Error("decimal not allowed")
//     }
//     return "valid number: " + num
// }

// try {
//     console.log(inputNumber(30))
// } catch(error) {
//     console.log("error: ", error.message)
// }

// function checkAge(ages) {
//     // let i = ages[i]
//     for(let i = 0; i < ages.length; i++) {
//         if(typeof ages[i] !== "number") {
//             throw new Error("age at index" + i + " is not a number")
//         }
//         if(ages[i] < 0 || ages[i] > 120){
//             throw new Error("age at index" + i + " is out of range")
//         }
//         if(!Number.isInteger(ages[i])) {
//             throw new Error("number at index " + i + " cannot be decimal")
//         }
//     }return "All ages are valid!"
// }

// try {
//     console.log(checkAge([20,30,13,3,3]))
// } catch(error) {
//     console.log("Error: ",error.message)
// }


// let array = [42, "hello", NaN, 3, "100", true, 8]

// function filterNumber(array) {
//     let result = [];
//     for(let i = 0; i < array.length; i++) {
//         if(typeof array[i] === "number" && !isNaN(array[i])){
//             result.push(array[i])
//         }
//     }console.log(result)
// }

// filterNumber(array)



// let scores = [20, "t" ,46, 55, 87, 78.9, 10,99]

// function validatescores(scores) {
//     let result = []
//     let invalidNumber = scores.filter(score => typeof score !== "number" || isNaN(score))
//     let validNumber = scores.filter(score => typeof score === "number" || !isNaN(score))
//     let scoreRange = validNumber.filter(score => score < 0 || score > 100)
//     let decimal = validNumber.filter(score => !Number.isInteger(score))

//     if(invalidNumber.length > 0) {
//         result.push(invalidNumber + " is not a valid number")
//     } 
//     if(scoreRange.length > 0) {
//         result.push(scoreRange + " cannot be less than 0 or greater 100")
//     }
//     if(decimal.length > 0) {
//         result.push(decimal + " cannot be in decimal")
//     }
//     if(result.length > 0) {
//         throw new Error(result.join("\n"))
//     } return "All score is valid"
// }

// try {
//     console.log(validatescores(scores))
// } catch(error) {
//     console.log("Error: ",error.message)
// }



// let rawScores = [50, 34, 19, 88, 70, 56, 92, 100, 12, 0, 87];

// function cleanAndValidateScores(rawScores) {
//     let result = [];
//     let validScores = rawScores.filter(scores => typeof scores === "number" && !isNaN(scores))
//     let mistypedScores = rawScores.filter(scores =>typeof scores !== "number" || isNaN(scores))
//     // let mistypedScores = 
//     let outOfRangeScores = validScores.filter(scores => scores < 0 || scores > 100)
//     let decimalScores = validScores.filter(scores => !Number.isInteger(scores))
//     let cleanedScores = validScores.filter(scores => typeof scores === "number" && !isNaN(scores) && Number.isInteger(scores) && scores >= 0 && scores <= 100)

 
//     if(mistypedScores.length > 0) {
//         result.push(mistypedScores + " : is/are not a valid score")
//     }
//     if(outOfRangeScores.length > 0) {
//         result.push(outOfRangeScores + " :score(s) is out of range")
//     }
//     if(decimalScores.length > 0) {
//         result.push(decimalScores + " :score(s) can not be in decimal")
//     }
//     // if(validScores.length > 0) {
//     //     result.push(validScores + " :All scores are valid")
//     // }
//     if(result.length > 0) {
//         throw new Error(result.join("\n"))
//     } return "valid Score: " + cleanedScores
// }

// try {
//     console.log(cleanAndValidateScores(rawScores))
// } catch(error) {
//     console.log("error: ",error.message)
// }


// let todoList = [];

// function addTask(task) {
//     let findTask = todoList.find(todo => todo.task === task)
//     if(findTask) {
//         throw new Error("task already exist")     
//     }
//     todoList.push({task})
//     return todoList
// }

// function removeTask(task) {
//     let remove = todoList.filter(todo => todo.task !== task)
//     todoList = remove
//     return todoList
// }

// function listTask() {
//    todoList.forEach(todo =>{
//     console.log(todo)
//    })
// }

// function findTask(task) {
//     let find = todoList.find(todo => todo.task === task)
//     return find
// }

// function clearAllTask() {
//     todoList.length = 0
//     return todoList
// }

// console.log(addTask("Cook dinner"))
// console.log(addTask("Do home work"))
// console.log(addTask("Do home work"))
// console.log(addTask("Do home work"))
// console.log(addTask("play soccer"))
// console.log(removeTask("Cook dinner"))
// listTask()
// console.log(findTask("play soccer"))
// console.log(clearAllTask())


// let shop = [];
// let cart = [];
// let id = 0;

// function addItemToShop(name) {
//     let checkItem = shop.find(item => item.name === name);
//     if(!checkItem) {
//         shop.push({ id:id++, name, price:0, quantity:0 });
//         return shop;
//     } else {
//         throw new Error(name + " already exist in the shop");
//     }
// }

// function modifyPrice(id,price) {
//     if(price <= 0) {
//         throw new Error("price can not be less than or equal 0");
//     }
//     let findItem = shop.find(item => item.id === id);
//     if(findItem) {
//         findItem.price = price;
//         return findItem;
//     } else {
//         throw new Error("item not found");
//     }
// }

// function modifyQuantity(id,quantity) {
//     if(quantity <= 0) {
//         throw new Error("quantity must be more than 0");
//     }
//     let findItem = shop.find(item => item.id === id);
//     if(findItem) {
//         findItem.quantity += quantity;
//         return findItem;
//     } else {
//         throw new Error("item not found");
//     }
// }

// function addItemToCart(id) {
//     let checkItemInShop = shop.find(item => item.id === id);
//     let checkItemInCart = cart.find(item => item.id === id);
//     if(!checkItemInShop) {
//         throw new Error("item not in shop");
//     }
//     if(checkItemInShop) {
//         if(checkItemInShop.quantity <= 0) {
//             throw new Error("item is out of stock");
//         }
//     }
//     if(!checkItemInCart) {
//         addItem = {
//             id: checkItemInShop.id,
//             name: checkItemInShop.name,
//             quantity: 0
//         }
//         cart.push(addItem);
//         return addItem;
//     } else {
//         throw new Error("item already exist in the cart");
//     }
// }

// function increaseitemQuantityInCart(id, quantity) {
//     if(quantity < 0) {
//         throw new Error("Invalid quantity")
//     } 
//     let findItemInShop = shop.find(item => item.id === id);
//     let findItemInCart = cart.find(item => item.id === id);
    
//     if(findItemInShop.quantity < quantity) {
//         throw new Error("Insufficient stock");
//     }
//     if(findItemInCart) {
//         findItemInCart.quantity += quantity;
//         findItemInShop.quantity -= quantity;
//         return findItemInCart;
//     }
// }

// function decreaseitemQuantityInCart(id, quantity) {
//     if(quantity <= 0) {
//         throw new Error("Invalid quantity")
//     }
//     let findItemInShop = shop.find(item => item.id === id);
//     let findItemInCart = cart.find(item => item.id === id);
//     if(findItemInCart < quantity) {
//         throw new Error("you cannot remove more than quanity")
//     }
//     findItemInCart.quantity -= quantity;
//     findItemInShop.quantity += quantity;
//     return findItemInCart;
// }

// function removeItemFromCart(id) {
//     let findItemInShop = shop.find(item => item.id === id);
//     let findItemInCart = cart.find(item => item.id === id);
//     if(findItemInCart && findItemInShop) {
//         findItemInShop.quantity += findItemInCart.quantity;
//     }
//     let removeItem = cart.filter(item => item.id !== id);
//     cart = removeItem;
//     return cart;
// }

// function clearCart() {
//     cart.forEach(cartItem => {
//     let findItemInShop = shop.find(item => item.id === cartItem.id);
//     if(findItemInShop) {
//     findItemInShop.quantity += cartItem.quantity;
//     }
//     })
   
//     cart.length = 0 ;
//     return cart;
// }







// try {
//     console.log(addItemToShop("Apple"));
// } catch(error) {
//     console.log("Error: ",error.message);
// }

// try {
//     console.log(addItemToShop("Bread"));
// } catch(error) {
//     console.log("Error: ",error.message);
// }

// try {
//     console.log(addItemToShop("Shirt"));
// } catch(error) {
//     console.log("Error: ",error.message);
// }

// try {
//     console.log(modifyPrice(1, 1500));
// } catch(error) {
//     console.log("Error: ",error.message);
// }

// try {
//     console.log(modifyPrice(2, 2500));
// } catch(error) {
//     console.log("Error: ",error.message);
// }

// try {
//     console.log(modifyPrice(0, 400));
// } catch(error) {
//     console.log("Error: ",error.message);
// }

// try {
//     console.log(modifyQuantity(0, 20));
// } catch(error) {
//     console.log("Error: ",error.message);
// }

// try {
//     console.log(modifyQuantity(1, 20));
// } catch(error) {
//     console.log("Error: ",error.message);
// }

// try {
//     console.log(modifyQuantity(2, 20));
// } catch(error) {
//     console.log("Error: ",error.message);
// }


// try {
//     console.log(addItemToCart(0));
// } catch(error) {
//     console.log("Error: ",error.message);
// }

// try {
//     console.log(addItemToCart(1));
// } catch(error) {
//     console.log("Error: ",error.message);
// }

// try {
//     console.log(addItemToCart(2));
// } catch(error) {
//     console.log("Error: ",error.message);
// }

// try {
//     console.log(increaseitemQuantityInCart(0,5));
// } catch(error) {
//     console.log("Error: ",error.message);
// }

// try {
//     console.log(increaseitemQuantityInCart(1,5));
// } catch(error) {
//     console.log("Error: ",error.message);
// }

// try {
//     console.log(decreaseitemQuantityInCart(0,3));
// } catch(error) {
//     console.log("Error: ",error.message);
// }

// try {
//     console.log(removeItemFromCart(0));
// } catch(error) {
//     console.log("Error: ",error.message);
// }

// console.log(clearCart())

// console.log(cart)
// console.log(shop)

// const words = ["apple", "banana", "cat", "dog", "elephant", "sun"]
// function filterShortWords(words) {
//     let newWord = []
//     for(let i = 0; i < words.length; i++) {
//         if(words[i].length <= 5) {
//             newWord.push(words[i])
            
//         }
//     }return newWord
// }

// function filterShortWords(words) {
//     let newWord = []
//     words.map(word => {
//         if(word.length <= 5) {
//             newWord.push(word)
//             return newWord
//         }
//     });
//     return newWord
// }


// function filterShortWords(words) {
//     let newWord = []
//     let wordCount = []
//     let filtered = words.filter(word => word.length <= 5)
//     if(filtered) {
//         newWord.push(filtered)
//         return newWord
//     }
// }


// console.log(filterShortWords(words))

// const words = ["elephant", "giraffe", "tree", "banana", "cat"]

// function findFirstShortWords(words) {
//     let outcome = []
//     let shortWords = words.find(word => word.length <= 5)
//     if(shortWords) {
//         outcome.push(shortWords)
//     }return outcome
// }

// console.log(findFirstShortWords(words))


// const wordss = ["apple", "banana", "cherry", "date", "fig"]
// function getFirstThreeWords(wordss) {
//     let result = wordss.slice(0,3)
//     return result
// }

// console.log(getFirstThreeWords(wordss))

// const numbers = [2, 2, 3, 4];

// let total = numbers.reduce((num1, num2) => {
//     return num1 + num2;
// })

// console.log(total)


// const words = ["cat", "elephant", "giraffe", "sun"];
// function findLongestWord(words) {
//     return words.reduce((previous,current) => {
//         if(current.length < previous.length) {
//             return current
//         } else return previous
//     });
// }

// function findLongestWord(words) {
//     let index = [];
//     for(let i = 0; i < words.length; i++) {
//         if(words[i].length > index.length) {
//             index = words[i]
//         }
//     }return index
// }

// // console.log(findLongestWord(words))

// const words = ["apple", "banana", "kiwi", "cherry", "strawberry", "pindeapple"]

// function findLongestWords(words) {
//     let longestWords = []
//     let maxLength = 0
    
//     for(let i = 0; i < words.length; i++) {
//         let currentWord = words[i]
//         if(currentWord.length > maxLength) {
//             maxLength = currentWord.length
//             longestWords = [currentWord]
//         } else if(currentWord.length === maxLength) {
//             longestWords.push(currentWord)
//         }
//     }
//     return longestWords
// }

// function findLongestWords(words) {
//     let largerWords = []
//     let maxLength = 0
//     for(let i = 0; i > words.length; i++) {
//         let currentWord = words[i]
//         if(currentWord.length > maxLength) {
//             maxLength = currentWord
//             largerWords = [currentWord]
//         } else if(maxLength === currentWord.length) {
//             largerWords.push(currentWord)
//         }
//     }return largerWords
// }


// console.log(findLongestWords(words))


// const words = ["Apple", "banana", "Orange", "umbrella", "cat", "egg"]

// function vowelWords(words) {
//     let vowel = words.filter(word => "aeiou".includes(word[0]))
//     return vowel

// }

// console.log(vowelWords(words))

// const words = ["dog", "apple", "banana", "sun", "chair"];

// function countBigWords(words) {
//     wordsThatAreFiveOrMore = words.filter(word => word.length >= 5)
//     return wordsThatAreFiveOrMore
// }



// console.log(countBigWords(words)); // 3
// "apple", "banana", and "chair" are 5 or more letters

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

// function countWordFrequency(words) {
//     let frequency = {}
//     words.forEach(word => {
//         const count = words.filter (w => w === word).length
//         frequency[word] = count
//     })
//     return frequency
// }


// console.log(words.join().length);

let name = "felix"
name = "ola"

console.log(name)










