const inputBox = document.getElementById('inputBox')
const addBtn = document.getElementById('addBtn')
const todoList = document.getElementById('todoList')

const addtodo = () => {
  const inputText = inputBox.value.trim()
  if(inputText.length <= 0){
    alert("Please enter some task")
    return false

  }
  const li = document.createElement('li')
  const p = document.createElement('pt')
 
  pt.innerHTML = inputText
  li.appendChild(pt)

 const deleteBtn = document.createElement("button")  
  deleteBtn.innerText = "Remove"
  li.appendChild(deleteBtn)

  todoList.appendChild(li)
  inputBox.value = ""
}
const removeTodo = (e) =>{
  if(e.target.innerHTML === "Remove"){
    todoList.removeChild(e.target.parentElement)
  }
 
}
addBtn.addEventListener('click', addtodo)
todoList.addEventListener('click',removeTodo)