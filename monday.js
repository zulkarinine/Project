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

let nums = [1,2,3,4]
console.log(nums.reverse())