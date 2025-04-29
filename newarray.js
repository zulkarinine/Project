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

// let firstName="dele"
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


let cart=[]
function addToCart(items,quantity){
  cart.push(...new Array(quantity).fill(items))
  return cart
}
addToCart("apple", 4)
addToCart("grape",3)
addToCart("soap",1)
// console.log(cart)


function removeItem(cart,items,quantity){
  let count=0
  return cart.filter(currentItem=>{
if(currentItem===items && count<quantity){
  count++;
  return false;
}else{
  return true;
}
  })
}
cart=removeItem(cart,"soap",2)
// console.log(cart.length("apple"))

let summary={name:"ola",class:"primary 4"}
for(let item in summary){
console.log(summary[item])
}

