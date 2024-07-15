let inputBox = document.getElementById('inputBox')
let addBtn = document.getElementById('addBtn')
let todoList = document.getElementById('todoList')


const addTodo = () =>{
  const inputText = inputBox.value.trim()
  if(inputText.length <= 0){
    alert("You must add some thing in the todo")
    return false
  } 
  const li = document.createElement("li")
  const p = document.createElement("p")

  p.innerHTML = inputText
  li.appendChild(p)

  const deleteBtn = document.createElement("button")
   deleteBtn.innerHTML = "Remove"
   deleteBtn.classList.add("btn","deleteBtn")
   li.appendChild(deleteBtn)

  todoList.appendChild(li)
  inputBox.value = ""
}
const updateTodo=(e) =>{
  if(e.target.innerHTML === "Remove"){
    todoList.removeChild(e.target.parentElement)
  }
}
addBtn.addEventListener('click',addTodo)
todoList.addEventListener('click',updateTodo)