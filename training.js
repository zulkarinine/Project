// let studentNames=[]

// function addStudent(name){
//     if(!studentNames.includes(name)){
//  studentNames.push(name)}
//  }

// function remStudent(name){
// let removed=studentNames.filter(student=>student!==name)
// studentNames=removed
// }

// function showList(){
//         console.log(studentNames)
// }

// function findName(name){
//    if(studentNames.includes(name)){
//     console.log(name + " found")
//    }
// }

// function sortList(studentName){
// console.log(studentName.sort())
// }

// function countList(studentName){
// console.log(studentName.length)
// }

// function clearList(){
//    return studentNames=[]
// }
// addStudent("ola")
// addStudent("shade")
// addStudent("wale")
// addStudent("tolu")
// addStudent("wale")
// remStudent("ola")
// showList()
// findName("tolu")
// sortList(studentNames)
// countList(studentNames)
// console.log(studentNames)
// console.log(clearList())


// let cart=[]

// function addItem(name,price){
// cart.push({name,price,quantity:1})
// }
// addItem("samsung",200000)



// function increaseQty(name,quantity){
//    let item=cart.find(product=>product.name===name)
// if(item.name===name){
//    item.quantity+=quantity;
// }
// }

// function deductQty(name,quantity){
//    let item=cart.find(product=>product.name===name)
//    if(item.name===name){
//       item.quantity-=quantity;
//    }
// }
// increaseQty("samsung",1)
// deductQty("samsung",)
// console.log(cart)


// console.log(cart.name)







// let cartSystem=[]
// function addToCart(name,price){
//    cartSystem.push({name,price,quantity:1})
// }

// function updateQty(name,quantity){
//    let items=cartSystem.find(product=>product.name===name)
//    if(items){
//       items.quantity=quantity+items.quantity
//    }
// }

// function updateQtyByOne(name){
//    let items=cartSystem.find(product=>product.name===name)
//    if(items){
//       items.quantity+=1
//    }
// }

// function updateQtyMinusOne(name){
//    let items=cartSystem.find(product=>product.name===name)
//    if(items){
//       items.quantity-=1
//    }
// }

// function remItem(name){
//    let removed=cartSystem.filter(product=>product.name!==name)
//    cartSystem=removed
// }

// function showCart(){
//  console.log(cartSystem)
// }

// function cheapPrice(){
//    let price=cartSystem.filter(product=>product.price<500)
//    console.log(price)
// }

// function checkItem(name){
//    let findItem=cartSystem.find(product=>product.name===name)
//    console.log(name+" found")
// }

// function clearCart(){
//    cartSystem.length=0
//    console.log(cartSystem)
// }
// addToCart("Apple",200)
// addToCart("Slice Bread",1500)
// addToCart("Teddy Bear",3000)
// updateQty("Apple",2)
// updateQtyByOne("Apple")
// updateQtyMinusOne("Apple")
// remItem("Teddy Bear")
// showCart()
// cheapPrice()
// checkItem("Slice Bread")
// clearCart()
// console.log(cartSystem)

// let toDoList=[];
// let id=0

// function addTask(task){
//    toDoList.push({id:id++,task,status:"pending"})
// }

// function updateStatus(id,status){
//    const findTask=toDoList.find(list=>list.id===id)
//    if(findTask){
//       findTask.status=status
//    }else{
//       console.log("task not found")
//    }
// }

// function removeTask(id){
//    const remTask=toDoList.filter(list=>list.id!==id)
//    toDoList=remTask
// }

// function editTask(id,task){
//    const findTask=toDoList.find(list=>list.id===id)
//    if(findTask){
//       findTask.task=task
//    }else{
//       console.log("task not found")
//    }
// }

// function viewTask(){
//    console.log(toDoList)
// }

// function filterStatus(status){
//    const filterTask=toDoList.filter(list=>list.status===status)
//    console.log(filterTask)
// }

// function clearList(){
//    toDoList.length=0
//    console.log(toDoList)
// }




// NddTask("Read book")
// addTask("wash cloth")
// addTask("Wash dishes")
// addTask("Do Assignment")
// addTask("prepare dinner")
// updateStatus(3,"done")
// removeTask(2)
// editTask(1,"do chores")
// viewTask()
// filterStatus("done")
// clearList()


// console.log(toDoList)

// let student={
//    Name:"Felix",
//    Age:24,
//    Grade:"7th",
//    Subjects:["English","Art","Biology","Physics"],
//    isEnrolled:true
// }

// student.Grade="8th"
// student.school="Green Valley School"
// student.Subjects.push("History")

// console.log("Name:"+student.Name,"Grade:"+student.Grade)

// console.log(student)

// function printStudentInfo(student){
//    console.log(student.Name);
//    console.log(student.Age);
//    console.log(student.Subjects.join(","))
//    console.log(student.isEnrolled ? "yes" : "No")
// }

// printStudentInfo(student)

// const students=[
//    {names:"dele",age:"20",subject:"French",isEnrolled:true},
//    {names:"bose",age:"24",subject:"Agric",isEnrolled:true},
//    {names:"tunde",age:"18",subject:"Economics",isEnrolled:false},
     
// ]

// function getEnrolledStudents(isEnrolled){
//    const findStatus=students.filter(student=>student.isEnrolled===isEnrolled)
//    console.log(findStatus)
// }
// getEnrolledStudents(false)

// function findStudentByName(name){
//    const findName=students.filter(student=>student.names===name)
//    console.log(findName)
// }

// function getEnrollByName(isEnrolled){
//    const enroll=students
//    .filter(student=>student.isEnrolled===isEnrolled)
//    .map(student=>student.names)
//    console.log(enroll)
// }
// getEnrollByName(true)
// findStudentByName("dele")

let library = [ 
   {title: "The sugar girl", author: "Olawoyin", year: 2025, isAvailable: true} ,  
   {title: "The hunter prey", author: "Felix", year: 2021, isAvailable: false},            
   {title: "The sun and the moon", author: "Emmanuel", year: 2023, isAvailable: true},            
   {title: "The garden of eden", author: "Sunkanmi", year: 2019, isAvailable: false}
]

console.log(library)