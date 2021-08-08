
  const form = document.getElementById("create-task-form")
 form.addEventListener("submit", handleSubmit)
 const tasks = document.getElementById("tasks")


 const taskObjects = []


 function handleSubmit(e){
  e.preventDefault()
  const description = e.target["new-task-description"].value
  const priority = e.target.priority.value
  addTask(description, priority)
  e.target.reset()
 }

const colorToNum = {
  green: 0, yellow: 1, red: 2
}
   function addTask(description, priority){
     taskObjects.push({description: description, priority: priority, priorityNum: colorToNum[priority]})
     renderTasks()
 }

 function renderTasks() {
   tasks.innerHTML = ""
   taskObjects.forEach(task => {
    tasks.innerHTML += `<li class=${task.priority}>${task.description}<button>Delete</button></li>`
   })
 }

 document.getElementById("sort").addEventListener("click", function(){
   taskObjects.sort(function(a, b){
     return b.priorityNum - a.priorityNum
   })
   renderTasks()
 })
 
 tasks.addEventListener("click", handleClick)
 
 function handleClick(e) {
     if (e.target.tagName == "BUTTON")
     e.target.closest("li").remove()
   }
   
  //     const task =  document.createElement("li")
  //     task.innerText = description
  //     task.classList.add(priority)
  //     tasks.appendChild(task)
  //     const button = document.createElement("button")
  //     button.innerText = "Delete"
  //     button.addEventListener("click", function(){
  //       task.remove()
        
  //     })
  //     task.appendChild(button)
  // }
