let todoList = [];
let id=0;

function addTask(task) {
   todoList.push({ id:id++, task, status: "pending" });
   return todoList;
}

function updateStatus(id, status) {
   const findTask = todoList.find(todo => todo.id === id);
   if(findTask) {
      findTask.status = status;
      return findTask;
   } else {
      return "task not found";
   }
}

function removeTask(id) {
   const remTask = todoList.filter(todo => todo.id !== id);
   todoList = remTask;
   return todoList;
}

function editTask(id, task) {
   const findTask = todoList.find(todo => todo.id === id);
   if(findTask) {
      findTask.task = task;
      return findTask;
   } else {
      return "task not found";
   }
}

function viewTasks() {
   return todoList;
}

function filterStatus(status) {
   const filterTask = todoList.filter(todo => todo.status === status);
   return filterTask;
}

function clearList() {
   todoList.length=0;
   return todoList;
}







console.log(addTask("Read book"));
console.log(addTask("wash cloth"));
console.log(addTask("Wash dishes"));
console.log(addTask("Do Assignment"));
console.log(addTask("prepare dinner"));
console.log(updateStatus(3,"done"));
console.log(removeTask(2));
console.log(editTask(1,"do chores"));
console.log(viewTask());
console.log(filterStatus("done"));
console.log(clearList());

console.log(todoList);
