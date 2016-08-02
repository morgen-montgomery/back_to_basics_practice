var todos = ['item 1', 'item 2', 'item 3', 'item 4'];

function displayTodos() {
  console.log(todos);
}
displayTodos()

function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}
addTodo()

function changeTodo(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}
changeTodo()

function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}
deleteTodo()
