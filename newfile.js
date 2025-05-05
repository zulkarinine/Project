let toDoList=[];
let id=0

function addTask(task){
   toDoList.push({id:id++,task,status:"pending"})
}

function updateStatus(id,status){
   const findTask=toDoList.find(list=>list.id===id)
   if(findTask){
      findTask.status=status
   }else{
      console.log("task not found")
   }
}

function removeTask(id){
   const remTask=toDoList.filter(list=>list.id!==id)
   toDoList=remTask
}

function editTask(id,task){
   const findTask=toDoList.find(list=>list.id===id)
   if(findTask){
      findTask.task=task
   }else{
      console.log("task not found")
   }
}

function viewTask(){
   console.log(toDoList)
}

function filterStatus(status){
   const filterTask=toDoList.filter(list=>list.status===status)
   console.log(filterTask)
}

function clearList(){
   toDoList.length=0
   console.log(toDoList)
}




addTask("Read book")
addTask("wash cloth")
addTask("Wash dishes")
addTask("Do Assignment")
addTask("prepare dinner")
updateStatus(3,"done")
removeTask(2)
editTask(1,"do chores")
viewTask()
filterStatus("done")
clearList()


console.log(toDoList)