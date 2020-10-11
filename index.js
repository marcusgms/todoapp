var appContainer = document.querySelector('#app')
var list = document.querySelector('#app #todosContainer ul')
var header = document.querySelector('#app .header')

appContainer.style.margin = 0
appContainer.style.paddingTop = '100px'
appContainer.style.width = '100%'
appContainer.style.heigth = '100%'
appContainer.style.background = 'rgb(16, 16, 21)'
appContainer.style.textAlign = 'center'

list.style.margin = 0
list.style.padding = 0
list.style.alignItems = 'center'
list.style.display = 'grid'
list.style.placeItems = 'center'

header.style.background = 'rgb(16, 16, 21)'
header.style.margin = 0
header.style.padding = '10px'
header.style.top = 0
header.style.left = 0
header.style.right = 0
header.style.position = 'fixed'
header.style.textAlign = 'center'

var todos = JSON.parse(localStorage.getItem('todos')) || []

function renderTodos() {
 list.innerHTML = ''

 for (todo of todos) {
  var todoElement = document.createElement('li')
  var todoText = document.createTextNode(todo)
  var todoContainer = document.createElement('div')

  todoContainer.style.display = 'flex';
  todoContainer.style.flexDirection = 'column'
  todoContainer.style.justifyContent = 'center'
  todoContainer.style.minWidth = '33%'
  todoContainer.style.padding = '10px 0px 10px 0px'
  todoContainer.style.margin = '10px 0px 10px 0px'
  todoContainer.style.width = 'auto'
  todoContainer.style.maxWidth = '33%'
  todoContainer.style.background = 'rgb(11, 11, 15)'
  todoContainer.style.borderRadius = '3px'
  todoContainer.style.borderRadius = '3px'

  todoElement.style.padding = '5px'
  todoElement.style.color = '#999'

  var deleteLink = document.createElement('a')
  var deleteTxt = document.createTextNode("deletar")
  deleteLink.appendChild(deleteTxt)
  deleteLink.setAttribute('href', '#')

  deleteLink.style.textDecoration = 'none'
  deleteLink.style.color = 'rgb(250, 88, 101)'

  var position = todos.indexOf(todo)

  deleteLink.setAttribute('onclick', 'removeTodo(' + position + ')')

  todoElement.appendChild(todoText)
  todoContainer.appendChild(todoElement)
  todoContainer.appendChild(deleteLink)

  list.appendChild(todoContainer)
 }
}

//input
var inputElement = document.createElement('input')
inputElement.placeholder = 'Criar novo todo'

inputElement.style.borderRadius = '2px 0px 0px 2px'
inputElement.style.padding = '5px'
inputElement.style.background = 'transparent'
inputElement.style.border = '1px solid rgb(40, 40, 40)'
inputElement.style.color = 'rgb(199, 199, 199)'

header.appendChild(inputElement)

var addButton = document.createElement('button')
var buttonText = document.createTextNode('Adicionar')
addButton.appendChild(buttonText)
addButton.onclick = () => {
 if (inputElement.value !== '') {
  todos.push(inputElement.value)
  renderTodos()
  saveToStorage()
  inputElement.value = ''
 }
}
addButton.style.borderRadius = '0px 2px 2px 0px'
addButton.style.padding = '5px';
addButton.style.color = 'rgb(237, 237, 237)'
addButton.style.background = 'rgb(63, 86, 255)'
addButton.style.border = '1px solid rgb(63, 86, 255)'
addButton.style.cursor = 'pointer'

header.appendChild(addButton)

appContainer.appendChild(header)

const removeTodo = (position) => {
 todos.splice(position, 1)
 renderTodos()
 saveToStorage()
}

const saveToStorage = () => {
 localStorage.setItem('todos', JSON.stringify(todos))
}

renderTodos()