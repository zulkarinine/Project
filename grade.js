// function getGrade (score) {
//     let grade;
//     if(score < 45) {
//         grade = "F";
//     } else if(score <=59 || score === 45) {
//         grade = "D";
//     } else if(score <=79 || score === 60) {
//         grade = "C";
//     } else if (score <=89 || score === 80) { 
//         grade = "B";
//     } else if (score <=100 || score ==90) {
//         grade = "A"
//     } else{
//         grade = "Grade is not available"
//     }
//     return grade;
// }
// console.log(getGrade(120))



// function getGrade (score){
//     let grade;
//       switch(true) {
//         case score < 45: 
//         grade ="F";
//         break;
//         case score <=59 && score >= 45: 
//         grade = "D";
//         break;
//         case score <=79 && score >= 60: 
//         grade = "C";
//         break;
//         case score <=89 && score >= 80: 
//         grade = "B";
//         break;
//         case score <=100 && score >= 90: 
//         grade = "A";
//         break;
//         default: 
//         grade = "Grade is not available";
//         break;
//     }
//     return grade
// }
// console.log(getGrade(24))






// let games =  ["Soccer", "Tennis", "Heavy Weight", "Basket Ball", "GTA" ]
// games.push("Monopoly")
// games.unshift("Ludo")
// games.pop()
// games.shift()
// games.reverse()
// // console.log(games.length)
// // console.log(games)
// console.log(games.includes("Tennis"))


// games.forEach(function(game){
//     console.log(game)
// })

// function largerNumber(nums) {
//     if (nums.length===0) return "nums is empty";
//     let largest = nums[0];
//     for(let i = 0; i<=nums.length; i++){
//         if(nums[i]>largest){
//            largest=nums[i];
//         };
//     }
//     return largest
// }
// console.log(largerNumber([10, 25, 36, 78, 99, 15]))

// function evenOddNumbers(nums){
//     let evenNumber = [];
//     let oddNumber = [];
//     for (let i=0; i<=nums.length; i++){
//         if(nums[i] % 2 === 0){
//             evenNumber.push(nums[i])
//         } else {
//             oddNumber.push(nums[i])
//         }
//     }
//     return{
//         evenNumber,
//         oddNumber,
//     }
 
// }
// console.log(evenOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


// function removeDupVal(val){
//     let singleVal=[];
//     for (let i=0; i<val.length; i++){
//         if (!singleVal.includes(val[i])){
//             singleVal.push(val[i])
//         }
//     }
//     return singleVal
// }
// console.log(removeDupVal([1,1,2,2,3,4,4,4,5,6,7,7,8,9,9,9,10,10]))


// function removeDupVal (val){
//     let originalVal = [];
//     for (let i=0; i<val.length; i++){
//         if(!originalVal.includes(val[i])){
//             originalVal.push(val[i])
//         }
//     }
//     return originalVal
// }
// console.log(removeDupVal([1,1,1,2,3,4,4,5,6,6,6,7,8,8,9,0,0,10,10,11]))



// function removeDupVal(val){
//     let originalVal=[];
//     for(let i=0;i<val.length;i++){
//         if(!originalVal.includes(val[i])){
//             originalVal.push(val[i])
//         }
//     }
//     return originalVal
// }
// console.log(removeDupVal([1,1,2,3,4,5,5,5,6,7,8,8,8,9,9,0,0,0,11,16,78,99,0,0,88,99,9,3,3,3]))


// function sortNum(nums){
//     return nums.sort(function(a, b) {
//         return a-b;
//     })
// }
// console.log(sortNum([5,4,3,2,1,0]))


// let word = "Indomie"
// console.log(word.length)

// function wordLen (words){
//     let wordlen = [];
//     for(let i = 0;i<words.length; i++){
//         wordlen.push([words[i].length])
//     }
//     return wordlen
// }
// // console.log(wordLen(["Take","Me","To","Mama","Please"]))


// let words = ["Take","Me","To","Mama","Please"]
// let lengths = wordLen(words)
// console.log(lengths)