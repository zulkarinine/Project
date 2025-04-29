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

function FizzBuzz(num){
   let outcome;
if(num%3===0 && num%5===0){
      outcome="FizzBuzz"}
   else if(num%3===0){
      outcome = "Fizz"
   }else if (num%5===0){
      outcome = "Buzz"
   }else{
      outcome = num
   }
   return outcome
}
console.log(FizzBuzz(15))












